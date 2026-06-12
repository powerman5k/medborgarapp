import {
  questions as localQuestions,
  topics,
  type Question,
  type QuestionDifficulty,
  type QuestionType,
  type Topic,
} from "@/data/questions";
import { createClient } from "@/lib/supabase/server";
import type { QuestionTypeFilter, QuizStats, TopicWithCount } from "@/lib/quiz";

type AdminQuestionRow = {
  id: number;
  topic_id: string;
  topic: string;
  difficulty: string;
  type: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  created_at: string | null;
  updated_at: string | null;
};

export type AdminQuestionItem = Question & {
  createdAt: string | null;
  updatedAt: string | null;
};

function isQuestionDifficulty(value: string): value is QuestionDifficulty {
  return value === "easy" || value === "medium" || value === "hard";
}

function isQuestionType(value: string): value is QuestionType {
  return value === "fact" || value === "scenario" || value === "truefalse";
}

function mapAdminQuestion(row: AdminQuestionRow): AdminQuestionItem {
  return {
    id: Number(row.id),
    topicId: row.topic_id,
    topic: row.topic,
    difficulty: isQuestionDifficulty(row.difficulty) ? row.difficulty : "medium",
    type: isQuestionType(row.type) ? row.type : "fact",
    question: row.question,
    options: Array.isArray(row.options) ? row.options : [],
    correctAnswer: Number(row.correct_answer),
    explanation: row.explanation,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function getFallbackTopic(question: Question): Topic {
  return {
    id: question.topicId,
    title: question.topic,
    description: `Frågor om ${question.topic.toLowerCase()}.`,
    icon: "landmark",
  };
}

function getTopicsFromQuestions(allQuestions: Question[]): Topic[] {
  const topicsById = new Map(topics.map((topic) => [topic.id, topic]));

  for (const question of allQuestions) {
    if (!topicsById.has(question.topicId)) {
      topicsById.set(question.topicId, getFallbackTopic(question));
    }
  }

  return [...topicsById.values()].filter((topic) =>
    allQuestions.some((question) => question.topicId === topic.id),
  );
}

export async function getAdminQuestions(): Promise<AdminQuestionItem[]> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("admin_questions")
      .select("id, topic_id, topic, difficulty, type, question, options, correct_answer, explanation, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase admin questions lookup failed", error);
      return [];
    }

    return ((data ?? []) as AdminQuestionRow[]).map(mapAdminQuestion);
  } catch (error) {
    console.error("Supabase admin questions lookup failed", error);
    return [];
  }
}

export async function getAllQuestions(): Promise<Question[]> {
  const adminQuestions = await getAdminQuestions();

  return [...localQuestions, ...adminQuestions];
}

export async function getAllTopics(): Promise<Topic[]> {
  const allQuestions = await getAllQuestions();

  return getTopicsFromQuestions(allQuestions);
}

export async function getQuizStats(): Promise<QuizStats> {
  const allQuestions = await getAllQuestions();

  return {
    totalTopics: new Set(allQuestions.map((question) => question.topicId)).size,
    totalQuestions: allQuestions.length,
  };
}

export async function getTopicsWithCounts(): Promise<TopicWithCount[]> {
  const allQuestions = await getAllQuestions();
  const allTopics = getTopicsFromQuestions(allQuestions);

  return allTopics.map((topic) => ({
    ...topic,
    questionCount: allQuestions.filter((question) => question.topicId === topic.id).length,
  }));
}

export async function getQuestionsByTopic(
  topicId: string,
  typeFilter: QuestionTypeFilter = "all",
): Promise<Question[]> {
  const allQuestions = await getAllQuestions();

  return allQuestions.filter((question) => {
    const matchesTopic = question.topicId === topicId;
    const matchesType = typeFilter === "all" || question.type === typeFilter;

    return matchesTopic && matchesType;
  });
}

export async function getQuestionsByIds(questionIds: number[]): Promise<Question[]> {
  const allQuestions = await getAllQuestions();
  const questionsById = new Map(allQuestions.map((question) => [question.id, question]));

  return questionIds
    .map((questionId) => questionsById.get(questionId))
    .filter((question): question is Question => Boolean(question));
}

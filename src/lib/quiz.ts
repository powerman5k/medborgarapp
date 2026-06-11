import { questions, topics, type Question, type QuestionType, type Topic } from "@/data/questions";

export type TopicWithCount = Topic & {
  questionCount: number;
};

export type QuizStats = {
  totalTopics: number;
  totalQuestions: number;
};

export type QuestionTypeFilter = "all" | QuestionType;

export const wrongAnswersTopic: Topic = {
  id: "feltraning",
  title: "Felträning",
  description: "Frågor du tidigare svarat fel på.",
  icon: "vote",
};

export const questionTypeFilterOptions: Array<{
  value: QuestionTypeFilter;
  label: string;
}> = [
  { value: "all", label: "Alla frågor" },
  { value: "fact", label: "Endast faktafrågor" },
  { value: "scenario", label: "Endast scenariofrågor" },
  { value: "truefalse", label: "Endast sant/falskt" },
];

function getFallbackTopic(question: Question): Topic {
  return {
    id: question.topicId,
    title: question.topic,
    description: `Frågor om ${question.topic.toLowerCase()}.`,
    icon: "landmark",
  };
}

export function getAllTopics(): Topic[] {
  const topicsById = new Map(topics.map((topic) => [topic.id, topic]));

  for (const question of questions) {
    if (!topicsById.has(question.topicId)) {
      topicsById.set(question.topicId, getFallbackTopic(question));
    }
  }

  return [...topicsById.values()].filter((topic) =>
    questions.some((question) => question.topicId === topic.id),
  );
}

export function getQuizStats(): QuizStats {
  return {
    totalTopics: new Set(questions.map((question) => question.topicId)).size,
    totalQuestions: questions.length,
  };
}

export function getTopicsWithCounts(): TopicWithCount[] {
  return getAllTopics().map((topic) => ({
    ...topic,
    questionCount: getQuestionsByTopic(topic.id).length,
  }));
}

export function getTopicById(topicId: string): Topic | undefined {
  return getAllTopics().find((topic) => topic.id === topicId);
}

export function normalizeQuestionTypeFilter(value: string | undefined): QuestionTypeFilter {
  const validValues = questionTypeFilterOptions.map((option) => option.value);
  return validValues.includes(value as QuestionTypeFilter) ? (value as QuestionTypeFilter) : "all";
}

export function getQuestionsByTopic(topicId: string, typeFilter: QuestionTypeFilter = "all"): Question[] {
  return questions.filter((question) => {
    const matchesTopic = question.topicId === topicId;
    const matchesType = typeFilter === "all" || question.type === typeFilter;

    return matchesTopic && matchesType;
  });
}

export function getQuestionsByIds(questionIds: number[]): Question[] {
  const questionsById = new Map(questions.map((question) => [question.id, question]));

  return questionIds
    .map((questionId) => questionsById.get(questionId))
    .filter((question): question is Question => Boolean(question));
}

export function getResultMessage(score: number, total: number): string {
  if (total === 0) {
    return "Välj ett ämne och börja öva.";
  }

  const percentage = score / total;

  if (percentage === 1) {
    return "Full pott. Snyggt jobbat!";
  }

  if (percentage >= 0.7) {
    return "Starkt resultat. Repetera förklaringarna så sitter det ännu bättre.";
  }

  if (percentage >= 0.4) {
    return "Bra start. Gå igenom ämnet en gång till och prova igen.";
  }

  return "Fortsätt öva lugnt och metodiskt. Varje fråga hjälper.";
}

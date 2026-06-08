import { questions, topics, type Question, type QuestionType, type Topic } from "@/data/questions";

export type TopicWithCount = Topic & {
  questionCount: number;
};

export type QuestionTypeFilter = "all" | QuestionType;

export const questionTypeFilterOptions: Array<{
  value: QuestionTypeFilter;
  label: string;
}> = [
  { value: "all", label: "Alla frågor" },
  { value: "fact", label: "Endast faktafrågor" },
  { value: "scenario", label: "Endast scenariofrågor" },
  { value: "truefalse", label: "Endast sant/falskt" },
];

export function getTopicsWithCounts(): TopicWithCount[] {
  return topics.map((topic) => ({
    ...topic,
    questionCount: getQuestionsByTopic(topic.id).length,
  }));
}

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((topic) => topic.id === topicId);
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

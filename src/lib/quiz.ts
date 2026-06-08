import { questions, topics, type Question, type Topic } from "@/data/questions";

export type TopicWithCount = Topic & {
  questionCount: number;
};

export function getTopicsWithCounts(): TopicWithCount[] {
  return topics.map((topic) => ({
    ...topic,
    questionCount: getQuestionsByTopic(topic.id).length,
  }));
}

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((topic) => topic.id === topicId);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return questions.filter((question) => question.topicId === topicId);
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

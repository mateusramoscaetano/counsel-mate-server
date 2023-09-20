type Question = {
  id: number;
  createdAt: Date;
  content: string;
  author: User;
  response: Response[];
  userQuestionAction: UserQuestionAction[];
};
type Response = {
  id: number;
  createdAt: Date;
  content: string;
  author: User;
  question: Question;
};

type UserQuestionAction = {
  id: number;
  user: User;
  question: Question;
  questionId: number;
  liked: boolean;
  saved: boolean;
};

export class User {
  id: number;
  email: string;
  name: string;
  questions: Question[];
  responses: Response[];
  userQuestionAction: UserQuestionAction[];
}

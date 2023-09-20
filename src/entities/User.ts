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
  readonly id: number;
  user: User;
  question: Question;
  questionId: number;
  liked: boolean;
  saved: boolean;
};

export class User {
  readonly id: number;
  email: string;
  name: string;
  questions: Question[];
  responses: Response[];
  userQuestionAction: UserQuestionAction[];

  constructor(props: User) {
    Object.assign(this, props);
  }
}

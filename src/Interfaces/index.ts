export interface Question {
  choices?: Array<string>;
  rateValues?: Array<number>;
  colCount: string;
  hasOther: Boolean;
  id: number;
  isRequired: Boolean;
  name: string;
  otherText: string;
  title: string;
  type: string;
  visibleIf: string;
  result?: string;
  html?: string;
}

export interface IQuiz {
  cookieName: string;
  id: number;
  locale: string;
  questions?: Question[];
  showQuestionNumbers?: true;
  title: string;
}

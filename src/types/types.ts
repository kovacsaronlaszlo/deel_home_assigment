import { Dispatch, SetStateAction } from "react";

export type Car = {
  id: number;
  name: string;
  url?: string;
};

export type ContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  data: Car[];
  choosed: Car | null;
  setChoosed: Dispatch<SetStateAction<Car | null>>;
  styleClasses: CSSModuleClasses
};
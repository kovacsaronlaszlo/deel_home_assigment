import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Car, ContextType } from "../types/types";
import { fetchSuggestions } from "../util/fetch";
import styleClasses from "../components/AutoComplete.module.css"

export const AutoCompleteContext = createContext<ContextType | null>(null);

const AutoCompleteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Car[]>([]);
  const [choosed, setChoosed] = useState<Car | null>(null);

  useEffect(() => {
    if (input !== "") {
      fetchSuggestions(input).then(setData);
    } else {
      setData([]);
    }
  }, [input]);

  return (
    <AutoCompleteContext.Provider
      value={{ input, setInput, data, choosed, setChoosed, styleClasses }}
    >
      {children}
    </AutoCompleteContext.Provider>
  );
};

export default AutoCompleteProvider;

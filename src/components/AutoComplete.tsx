import { useContext } from "react";

import classes from "./AutoComplete.module.css";
import { AutoCompleteContext } from "../context/AutoCompleteContext";
import Input from "./assets/Input";
import InputRemoveButton from "./assets/InputRemoveButton";
import List from "./assets/List";
import Message from "./assets/Message";

export const useAutoCompleteContext = () => {
  const ctx = useContext(AutoCompleteContext);
  if (!ctx) {
    throw new Error(
      "useAutoComplete must be used within a AutoCompleteProvider"
    );
  }
  return ctx;
};

const Autocomplete = () => {
  const { input, choosed, data } = useAutoCompleteContext();

  return (
    <div className={classes.container}>
      <div>
        <Autocomplete.Input />
        <Autocomplete.InputRemoveButton />
      </div>
      <Autocomplete.List />

      {data.length === 0 && input !== "" && (
        <Autocomplete.Message>There is no such car!</Autocomplete.Message>
      )}
      {choosed && (
        <img src={choosed.url} alt={choosed.name} className={classes.image} />
      )}
    </div>
  );
};

export default Autocomplete;

Autocomplete.Input = Input;
Autocomplete.InputRemoveButton = InputRemoveButton;
Autocomplete.List = List;
Autocomplete.Message = Message;

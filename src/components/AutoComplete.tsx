import React, { useContext } from "react";

import classes from "./AutoComplete.module.css";
import { highlightMatch } from "./Highlighter";
import { AutoCompleteContext } from "../context/AutoCompleteContext";

const useAutoCompleteContext = () => {
  const ctx = useContext(AutoCompleteContext);
  if (!ctx) {
    throw new Error(
      "useAutoComplete must be used within a AutoCompleteProvider"
    );
  }
  return ctx;
};

const Autocomplete: React.FC = () => {
  const { input, setChoosed, choosed, setInput, data } =
    useAutoCompleteContext();

  function removeHandler() {
    setChoosed(null);
    setInput("");
  }

  return (
    <div className={classes.container}>
      <div>
        <input
          type="text"
          value={choosed ? choosed.name : input}
          onChange={(e) => setInput(e.target.value)}
          className={classes.input}
        />
        {input.length > 0 && (
          <button
            type="button"
            className={classes.button}
            onClick={removeHandler}
          >
            X
          </button>
        )}
      </div>

      {input.length > 0 && choosed === null && data.length > 0 && (
        <ul className={classes.list}>
          {data.map((item) => (
            <li
              key={item.id}
              className={classes.item}
              onClick={() => setChoosed(item)}
            >
              {highlightMatch(item.name, input, classes.highlight)}
            </li>
          ))}
        </ul>
      )}
      {data.length === 0 && input !== "" && (
        <small className={classes.error}>There is no such car!</small>
      )}
      {choosed && (
        <img src={choosed.url} alt={choosed.name} className={classes.image} />
      )}
    </div>
  );
};

export default Autocomplete;

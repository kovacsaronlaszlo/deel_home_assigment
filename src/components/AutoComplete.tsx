import React, { useState, useEffect } from "react";
import { Car } from "../types/types";

import classes from "./AutoComplete.module.css";
import { highlightMatch } from "./Highlighter";
import { fetchSuggestions } from "../util/fetch";

const Autocomplete: React.FC = () => {
  const [input, setInput] = useState("");
  const [cars, setCars] = useState<Car[]>([]);
  const [choosed, setChoosed] = useState<Car | null>(null);

  useEffect(() => {
    if(input !== "") {
      fetchSuggestions(input).then(setCars);
    }
  }, [input]);

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

      {input.length > 0 && choosed === null && cars.length > 0 && (
        <ul className={classes.list}>
          {cars.map((car) => (
            <li
              key={car.id}
              className={classes.item}
              onClick={() => setChoosed(car)}
            >
              {highlightMatch(car.name, input, classes.highlight)}
            </li>
          ))}
        </ul>
      )}
      {cars.length === 0 && input !== "" &&  (
        <small className={classes.error}>There is no such car!</small>
      )}
      {choosed && (
        <img src={choosed.url} alt={choosed.name} className={classes.image}/>
      )}
    </div>
  );
};

export default Autocomplete;

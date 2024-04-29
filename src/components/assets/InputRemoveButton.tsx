import { useAutoCompleteContext } from "../AutoComplete";

export default function InputRemoveButton(): React.ReactElement | null {
  const { input, setInput, setChoosed, styleClasses } =
    useAutoCompleteContext();
  function removeHandler() {
    setChoosed(null);
    setInput("");
  }
  return input.length > 0 ? (
    <button
      type="button"
      className={styleClasses.button}
      onClick={removeHandler}
    >
      X
    </button>
  ) : null;
}

import { useAutoCompleteContext } from "../AutoComplete";

export default function Input(): React.ReactElement {
  const { input, choosed, setInput, styleClasses } = useAutoCompleteContext();
  return (
    <input
      type="text"
      value={choosed ? choosed.name : input}
      onChange={(e) => setInput(e.target.value)}
      className={styleClasses.input}
    />
  );
}

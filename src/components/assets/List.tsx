import { useAutoCompleteContext } from "../AutoComplete";
import { highlightMatch } from "../Highlighter";

export default function List(): React.ReactElement | null {
  const { input, setChoosed, choosed, data, styleClasses } = useAutoCompleteContext();
  return input.length > 0 && choosed === null && data.length > 0 ? (
    <ul className={styleClasses.list}>
      {data.map((item) => (
        <li
          key={item.id}
          className={styleClasses.item}
          onClick={() => setChoosed(item)}
        >
          {highlightMatch(item.name, input, styleClasses.highlight)}
        </li>
      ))}
    </ul>
  ) : null;
}

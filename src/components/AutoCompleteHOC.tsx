import AutoCompleteProvider from "../context/AutoCompleteContext";
import Autocomplete from "./AutoComplete";

export default function AutoCompleteHOC() {
  return (
    <AutoCompleteProvider>
      <Autocomplete />
    </AutoCompleteProvider>
  );
}

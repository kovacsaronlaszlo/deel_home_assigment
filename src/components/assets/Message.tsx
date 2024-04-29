
import { useAutoCompleteContext } from "../AutoComplete";
import { PropsWithChildren } from "react";


export default function Message({ children }: PropsWithChildren) {
  const { styleClasses } = useAutoCompleteContext();
  return <small className={styleClasses.error}>{children}</small>;
}

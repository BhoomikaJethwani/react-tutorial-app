import { useContext } from "react";
import { ToDoItemsContext } from "../store/ToDoItemsStore";

const EmptyMsg = () => {
  const { newToDoItems } = useContext(ToDoItemsContext);
  return newToDoItems.length === 0 && "Done For the Day";
};
export default EmptyMsg;

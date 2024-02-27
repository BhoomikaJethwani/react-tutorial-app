import { useContext } from "react";
import { ToDoItemsContext } from "../store/ToDoItemsStore";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const { newToDoItems } = useContext(ToDoItemsContext);

  return (
    <div className={styles.itemContainer}>
      {newToDoItems.map((item) => (
        <ToDoItem
          key={item.name}
          toDoName={item.name}
          toDoDate={item.date}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoList;

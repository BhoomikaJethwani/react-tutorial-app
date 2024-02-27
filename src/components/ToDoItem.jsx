import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ToDoItemsContext } from "../store/ToDoItemsStore";

function ToDoItem({ toDoName, toDoDate }) {
  //   let toDoName = "Milk";
  //     let toDoDate = "4/10/2023";

  const { onDeleteItem } = useContext(ToDoItemsContext);

  const onClickDelete = (toDoName) => {
    onDeleteItem(toDoName);
  };

  return (
    <div>
      <div className="row kg-row">
        <div className="col-5">{toDoName}</div>
        <div className="col-3">{toDoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onClickDelete(toDoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;

import { useContext } from "react";
import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { ToDoItemsContext } from "../store/ToDoItemsStore";

function ToDoApp() {
  const { onNewAddItem } = useContext(ToDoItemsContext);

  // const [toDoName, setName] = useState();
  // const [toDoDate, setDate] = useState();
  const toDoNameRef = useRef();
  const toDoDateRef = useRef();

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  //   console.log(`No of updates : ${noOfUpdates.current}`);
  // };

  const handleOnClick = () => {
    event.preventDefault();
    const toDoName = toDoNameRef.current.value;
    const toDoDate = toDoDateRef.current.value;
    toDoNameRef.current.value = "";
    toDoDateRef.current.value = "";
    onNewAddItem(toDoName, toDoDate);
    // setDate("");
    // setName("");
  };

  return (
    <div>
      <form className="row kg-row" onSubmit={handleOnClick}>
        <div className="col-5 input">
          <input
            type="text"
            ref={toDoNameRef}
            placeholder="Enter Item"
            // value={toDoName}
            // onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-3 input">
          <input
            type="date"
            placeholder="Enter Date"
            ref={toDoDateRef}
            // value={toDoDate}
            // onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoApp;

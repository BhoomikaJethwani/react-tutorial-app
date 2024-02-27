import "./App.css";
import Card from "./Card";
import AppName from "./components/AppName";
import ToDoItem from "./components/ToDoItem";
import ToDoApp from "./components/ToDoApp";
import CurrDateTime from "./components/CurrDateTime";
import FoodList from "./components/FoodList";
import ToDoList from "./components/ToDoList";
import Calculator from "./components/Calculator";
import FilterTable from "./components/FilterTable";
import { useState } from "react";
import Container from "./components/Container";
import EmptyMsg from "./components/EmptyMsg";
import { ToDoItemsContext } from "./store/ToDoItemsStore";
import { useReducer } from "react";

/* ------------------- Reducer Function -------------------------------*/

const toDoItemsReducer = (currentToDoItems, action) => {
  let newToDoItems = currentToDoItems;

  if (action.type == "NEW_ITEM") {
    newToDoItems = [
      ...currentToDoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDate,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newToDoItems = currentToDoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newToDoItems;
};

function App() {
  /* ------------------- Reducer Hook -------------------------------*/

  const [newToDoItems, dispatchToDo] = useReducer(toDoItemsReducer, []);

  const onNewAddItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };

    dispatchToDo(newItemAction); //Goes to reducer
  };

  const onDeleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };

    dispatchToDo(deleteItemAction); //Goes to reducer
  };
  /* ------------------- Sample Test Arrays -------------------------------*/

  // let defaultTodo = ["Channa", "Avo", "Methi", "Dosa"];

  // const toDoItemsArr = [
  //   {
  //     name: "Buy Milk",
  //     date: "21-11-2023",
  //   },
  // ];

  /* ------------------- State Hook -------------------------------*/

  /*const [textState, setTextState] = useState("Food Item Entered");
  const [foodItem, setFoodItem] = useState([]);

  const handleOnChange = (event) => {
    setTextState(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      setFoodItem([...foodItem, event.target.value]);
      event.target.value = "";
    }
  };*/

  // const [toDos, setToDos] = useState([]);

  /*const onNewAddItem = (itemName, itemDate) => {
    console.log(`New item Name ${itemName}`);
    // setToDos([...toDos, { name: `${itemName}`, date: `${itemDate}` }]);

    // Use curVal here with set for useState as React is async and 
    // may have older pending tasks, to avaoid error
    setToDos((curVal) => [
      { name: `${itemName}`, date: `${itemDate}` },
      ...curVal,
    ]);
  };*/

  /* const onDeleteItem = (itemName) => {
    console.log(`Deleted item Name ${itemName}`);
    const newToDos = toDos.filter((toDo) => toDo.name != itemName);
    setToDos(newToDos);
  }; */

  /* ------------------- Returned JSX -------------------------------*/
  return (
    <div>
      {/* <Calculator></Calculator> */}
      <Container>
        <ToDoItemsContext.Provider
          value={{
            newToDoItems,
            onNewAddItem,
            onDeleteItem,
          }}
        >
          <AppName></AppName>
          <ToDoApp></ToDoApp>
          <ToDoList> </ToDoList>
          <EmptyMsg></EmptyMsg>
        </ToDoItemsContext.Provider>
      </Container>

      <CurrDateTime></CurrDateTime>
      {/* <FoodList
        items={foodItem}
        handleOnChange={handleOnChange}
        textState={textState}
        handleKeyDown={handleKeyDown}
      ></FoodList> */}
      {/* <FilterTable></FilterTable> */}
    </div>
  );
}

export default App;

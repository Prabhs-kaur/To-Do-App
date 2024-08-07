import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preValue) => {
      return [...preValue, inputText];
    });

  }

  function handleDelete(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />

      <div>
        <ul>
          {items.map((noitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              onChecked={handleDelete}
              text={noitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

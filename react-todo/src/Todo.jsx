import { useState, useRef } from "react";
import "./Todo.css";
import Lists from "./Lists";
import Input from "./Input";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const textRef = useRef(null);
  const dateRef = useRef(null);
  const addBtnRef = useRef(null);

  const handleTodo = () => {
    let newTask = textRef.current.value;
    let newDate = dateRef.current.value;
    setTodoList((prevTodoList) => [...prevTodoList, { newTask, newDate }]);
    const updatedTodoList = [...todoList, { newTask, newDate }];
    localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    textRef.current.value = "";
    dateRef.current.value = "";
  };

  const deleteTask = (id) => {
    setTodoList((prevTodoList) => {
      let updated = prevTodoList.filter((item, index) => index !== id);
      localStorage.setItem("todo", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div>
      <h1>TODO</h1>
      <Input
        textRef={textRef}
        dateRef={dateRef}
        addBtnRef={addBtnRef}
        handleTodo={handleTodo}
      />
      <Lists todoList={todoList} deleteTask={deleteTask} />
    </div>
  );
};

export default Todo;

import { log } from "console";
import { useState } from "react";
import { ITodo } from "../../models/ITodo/ITodo";
import { AddTodo } from "../AddToDo/addToDo";
import { ShowTodos } from "../ShowTodos/showTodos";

export const CreateHtml = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const changeComplete = (id: number) => {
    let updatedList = todoList.map((item) =>
      todoList.indexOf(item) === id ? { ...item, status: !item.status } : item
    );
    setTodoList(updatedList);
  };

  const addTask = (task: string) => {
    setTodoList([...todoList, { todo: task, status: false }]);
  };

  const deleteItem = (id: number) => {
    // let deletedItem = todoList.map((item) => todoList.indexOf)
    setTodoList(todoList.filter((item) => todoList.indexOf(item) !== id));
  };

  console.log(todoList);
  return (
    <div>
      <AddTodo addTask={addTask} />
      <ShowTodos
        deleteItem={deleteItem}
        changeComplete={changeComplete}
        todoList={todoList}
      />
    </div>
  );
};

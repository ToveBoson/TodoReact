import { ITodo } from "../../models/ITodo/ITodo";
import "../ShowTodos/showTodos.scss";

export interface IShowTodosProps {
  todoList: ITodo[];
  changeComplete(id: number): void;
  deleteItem(id: number): void;
}

export const ShowTodos = (props: IShowTodosProps) => {
  const handleDone = (id: number) => {
    props.changeComplete(id);
  };

  const deleteItem = (id: number) => {
    props.deleteItem(id);
  };

  let listItem = props.todoList.map((item, index) => {
    if (item.status) {
      return (
        <li>
          {" "}
          <span
            className="taskDone"
            key={index}
            onClick={() => {
              handleDone(index);
            }}
          >
            {item.todo}
          </span>
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            Ta bort
          </button>
        </li>
      );
    }
    return (
      <li>
        {" "}
        <span
          key={index}
          onClick={() => {
            handleDone(index);
          }}
        >
          {item.todo}
        </span>
        <button
          onClick={() => {
            deleteItem(index);
          }}
        >
          Ta bort
        </button>
      </li>
    );
  });

  return <ul>{listItem}</ul>;
};

import { ChangeEvent, FormEvent, useState } from "react";

export interface IAddTaskProps {
  addTask(task: string): void;
}

export const AddTodo = (props: IAddTaskProps) => {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (form: FormEvent) => {
    form.preventDefault();
    props.addTask(todo);
  };
  console.log(todo);
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={todo} type="text" />
      <button type="submit">Spara</button>
    </form>
  );
};

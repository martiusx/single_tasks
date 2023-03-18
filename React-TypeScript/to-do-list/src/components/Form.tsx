import { useState } from "react";
import FormElement from "./FormElement";

const Form = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  let newTask: string = "";

  const addTask = (e: any) => {
    e.preventDefault();
    if (newTask) {
      console.log(newTask);
      setTasks((prevState) => [...prevState, newTask]);
    }
  };

  const removeTask = (el: string) => {
    console.log(el);
    const newtasksList = tasks.filter((els) => {
      return els !== el;
    });
    setTasks(newtasksList);
  };
  return (
    <form
      className="container middle f-column"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name">Task:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => (newTask = e.target.value)}
        ></input>
        <button type="submit" onClick={(e) => addTask(e)}>
          Add
        </button>
      </div>
      <ul className="tasks"></ul>
      <p>Todo:</p>

      <ul>
        {tasks.map((el, index) => {
          return (
            <FormElement
              key={index}
              onClickHandler={() => removeTask(el)}
              task={el}
            />
          );
        })}
      </ul>
    </form>
  );
};

export default Form;

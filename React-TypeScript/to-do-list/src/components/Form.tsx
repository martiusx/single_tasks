import { useState, useEffect } from "react";
import FormElement from "./FormElement";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Form = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [tasksId, setTasksId] = useState<any>("");
  const [newTasks, setNewTasks] = useState("");

  const taskCollectionRef = collection(db, "tasks");

  // const addTask = (e: any) => {
  //   e.preventDefault();
  //   if (newTask) {
  //     console.log(newTask);
  //     setTasks((prevState) => [...prevState, newTask]);
  //   }
  // };

  const removeTask = async (id: string) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
    getTaskList();
  };

  const getTaskList = async () => {
    try {
      const data = await getDocs(taskCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitTask = async () => {
    try {
      await addDoc(taskCollectionRef, {
        task: newTasks,
      });
      getTaskList();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);
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
          onChange={(e) => setNewTasks(e.target.value)}
        ></input>
        <button type="submit" onClick={() => onSubmitTask()}>
          Add
        </button>
      </div>
      <ul className="tasks"></ul>
      <p>Todo:</p>

      <ul>
        {tasks.map((el: any) => {
          return (
            <FormElement
              key={el.id}
              onClickHandler={() => removeTask(el.id)}
              task={el.task}
            />
          );
        })}
      </ul>
    </form>
  );
};

export default Form;

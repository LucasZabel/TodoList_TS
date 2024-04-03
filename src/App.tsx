import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([
    {
      id: 1,
      title: "Study",
      description: "Learn more about React and TypeScript",
      difficulty: 3,
      isCompleted: false
    },
    {
      id: 2,
      title: "Gym",
      description: "Go to the gym at 6:00 PM.",
      difficulty: 2,
      isCompleted: true
    },
  ]);

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);


  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };


  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    };
  };


  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };


  const updateTask = (id: number, title: string, description: string, difficulty: number, isCompleted: boolean) => {
    const updatedTask: ITask = { id, title, description, difficulty, isCompleted };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTaskList(updatedItems);
    hideOrShowModal(false);
  };


  const completeTask = (id: number) => {
    const newTasks = [...taskList]
    newTasks.map(
      (task) => task.id === id ? task.isCompleted = !task.isCompleted : task
    );
    setTaskList(newTasks);
    console.log(id)
    console.log(taskList)
  }


  return (
    <>
      <Modal children={<TaskForm textTitle='Edit Task:' btnText="Edit Task" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} />
      <Header />
      <main className='main'>
        <TaskForm textTitle='Add a new task:' taskList={taskList} setTaskList={setTaskList} btnText='Create Task' />
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} completeTask={completeTask} />
      </main>
      <Footer />
    </>
  );
};

export default App;

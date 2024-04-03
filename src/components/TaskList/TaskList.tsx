import { ITask } from "../../interfaces/Task";
import "./TaskList.css";

type Props = {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
    completeTask(id: number): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit, completeTask }: Props) => {
    return (
        <div>
            <h2>Your Tasks:</h2>
            {taskList.length > 0 ? (
                taskList.map((task) => (

                    <div style={{
                        backgroundColor:
                            task.isCompleted
                                ? "#96e99d"
                                : "",
                        transition: "0.5s"
                    }} key={task.id} className="task">
                        <div className="details">
                            <h4 style={{
                                textDecoration:
                                    task.isCompleted
                                        ? "line-through"
                                        : ""
                            }}>{task.title}</h4>
                            <p style={{
                                textDecoration:
                                    task.isCompleted
                                        ? "line-through"
                                        : ""
                            }}>Description: {task.description}</p>
                            <p style={{
                                textDecoration:
                                    task.isCompleted
                                        ? "line-through"
                                        : ""
                            }}>Difficulty: {task.difficulty}</p>
                        </div>
                        <div className="actions">
                            <i style={{
                                backgroundColor:
                                    task.isCompleted
                                        ? "#008000"
                                        : "",
                                borderColor:
                                    task.isCompleted
                                        ? "#008000"
                                        : ""
                            }}
                                className='bi bi-check-square'
                                onClick={() => completeTask(task.id)}></i>
                            <i className="edit bi bi-pencil-square" onClick={() => { handleEdit(task) }}></i>
                            <i className="delete bi bi-x-square" onClick={() => { handleDelete(task.id) }}></i>
                        </div>
                    </div>

                ))
            ) : (

                <p>There are no tasks registered.</p>

            )}
        </div>
    );
};

export default TaskList;
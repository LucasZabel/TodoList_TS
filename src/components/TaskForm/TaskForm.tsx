import './TaskForm.css';
import { ITask } from '../../interfaces/Task';
import { useState, FormEvent, useEffect } from 'react';

type Props = {
    textTitle: string;
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    handleUpdate?(id: number, title: string, description: string, difficulty: number, isCompleted: boolean): void;
};

const TaskForm = ({ textTitle, btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
        if (task) {
            setId(task.id);
            setTitle(task.title);
            setDescription(task.description);
            setDifficulty(task.difficulty);
            setIsCompleted(task.isCompleted);
        }
    }, [task]);


    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (handleUpdate) {
            handleUpdate(id, title, description, difficulty, isCompleted);
        } else {
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = { id, title, description, difficulty, isCompleted }
            setTaskList!([...taskList, newTask])
            setTitle("");
            setDifficulty(0);
        };
    };


    return (
        <div>
            <h2>{textTitle}</h2>
            <form onSubmit={addTaskHandler} className='form'>
                <div className='input_container'>
                    <label
                        htmlFor="title">
                        Task title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Set task title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className='input_container'>
                    <label
                        htmlFor="description">
                        Task description:
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Set task description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>
                <div className='input_container'>
                    <label
                        htmlFor="difficulty">
                        Difficulty:
                    </label>
                    <input
                        type="number"
                        name="difficulty"
                        placeholder="Set task difficulty"
                        onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        value={difficulty}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value={btnText}
                />
            </form>
        </div>
    );
};

export default TaskForm;
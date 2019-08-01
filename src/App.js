import React, { useState } from "react";

const TaskInput = ({ onSubmit }) => {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const taskObj = {
            id: task,
            body: task,
        };
        onSubmit(taskObj);
        setTask("");
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                value={task}
                onChange={e => handleChange(e)}
                placeholder='Your task...'
            />
        </form>
    );
};

const TaskList = ({ tasks }) => (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>{task.body}</li>
        ))}
    </ul>
);

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = task => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <TaskInput onSubmit={handleSubmit} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;

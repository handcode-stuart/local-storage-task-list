import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const handleSubmit = task => {
        setTasks([...tasks, task]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    };

    const handleRemoveTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
        localStorage.setItem("tasks", JSON.stringify(tasks.filter(task => task.id !== id)));
    };

    return (
        <div>
            <TaskInput onSubmit={handleSubmit} />
            <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} />
        </div>
    );
};

export default App;

import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const handleSubmit = task => {
        setTasks([...tasks, task]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    };

    return (
        <div>
            <TaskInput onSubmit={handleSubmit} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;

import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "435ewfh",
            body: "Task 1",
        },
        {
            id: "673rf65",
            body: "Task 2",
        },
    ]);

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

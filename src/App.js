import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`;

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
        <>
            <GlobalStyle />
            <TaskInput onSubmit={handleSubmit} />
            <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} />
        </>
    );
};

export default App;

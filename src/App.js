import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TaskList from './components/TaskList/TaskList';
import TaskInput from './components/TaskInput/TaskInput';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`;

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );

    const handleSubmit = task => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const handleRemoveTask = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
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

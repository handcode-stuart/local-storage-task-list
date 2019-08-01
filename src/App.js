import React, { useState } from "react";
import styled from "styled-components";

const StyledTaskList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const Task = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;
`;

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
    <StyledTaskList>
        {tasks.map(task => (
            <Task key={task.id}>{task.body}</Task>
        ))}
    </StyledTaskList>
);

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

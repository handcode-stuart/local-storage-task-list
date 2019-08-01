import React, { useState } from "react";
import styled from "styled-components";

const StyledTaskInput = styled.input`
    border: none;
    width: 100%;
    padding: 20px 10px;
    font-size: 16px;
    background-color: #ededed;

    &:focus {
        outline: none;
    }
`;

const TaskInput = ({ onSubmit }) => {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (task !== "") {
            const taskStripped = `${task
                .split(" ")
                .join("-")
                .toLowerCase()}-${Date.now()}`;

            const taskObj = { id: taskStripped, body: task };

            onSubmit(taskObj);

            setTask("");
        }
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <StyledTaskInput
                type='text'
                value={task}
                onChange={e => handleChange(e)}
                placeholder='Your task...'
            />
        </form>
    );
};

export default TaskInput;

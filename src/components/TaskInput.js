import React, { useState } from "react";
import styled from "styled-components";

const StyledTaskInput = styled.input`
    border: 2px solid lightgrey;
    border-radius: 2px;
    padding: 4px 6px;
    transition: border-color 250ms ease-in-out;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: red;
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
            const taskStripped = task
                .split(" ")
                .join("-")
                .toLowerCase();
            const taskObj = {
                id: taskStripped,
                body: task,
            };
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

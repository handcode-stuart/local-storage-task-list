import React, { useState } from "react";
import styled from "styled-components";

const StyledTaskInput = styled.input``;

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

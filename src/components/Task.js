import React from "react";
import styled from "styled-components";

const StyledTask = styled.li`
    padding: 20px 10px;
    transition: opacity 250ms ease-in-out;

    &:nth-child(even) {
        background-color: #ededed;
    }

    &:hover {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const Task = ({ task: { id, body }, handleRemoveTask }) => {
    const handleClick = () => {
        handleRemoveTask(id);
    };

    return <StyledTask onClick={handleClick}>{body}</StyledTask>;
};

export default Task;

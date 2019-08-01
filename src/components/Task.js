import React from "react";
import styled from "styled-components";

const StyledTask = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;
`;

const Task = ({ task: { id, body }, handleRemoveTask }) => {
    const handleClick = () => {
        handleRemoveTask(id);
    };

    return <StyledTask onClick={handleClick}>{body}</StyledTask>;
};

export default Task;

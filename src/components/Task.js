import React from "react";
import styled from "styled-components";

const StyledTask = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;
`;

const Task = ({ task }) => <StyledTask key={task.id}>{task.body}</StyledTask>;

export default Task;

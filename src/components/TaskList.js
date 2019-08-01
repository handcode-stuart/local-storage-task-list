import React from "react";
import styled from "styled-components";

const StyledTaskList = styled.ul`
    margin: 10px 0;
    padding: 0;
    list-style-type: none;
`;

const Task = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;
`;

const TaskList = ({ tasks }) => (
    <StyledTaskList>
        {tasks.map(task => (
            <Task key={task.id}>{task.body}</Task>
        ))}
    </StyledTaskList>
);

export default TaskList;

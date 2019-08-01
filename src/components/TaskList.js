import React from "react";
import styled from "styled-components";
import Task from "./Task";

const StyledTaskList = styled.ul`
    margin: 10px 0;
    padding: 0;
    list-style-type: none;
`;

const TaskList = ({ tasks }) => (
    <StyledTaskList>
        {tasks.map(task => (
            <Task key={task.id} task={task} />
        ))}
    </StyledTaskList>
);

export default TaskList;

import React from "react";
import styled from "styled-components";
import Task from "./Task";

const StyledTaskList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const TaskList = ({ handleRemoveTask, tasks }) => (
    <StyledTaskList>
        {tasks.map(task => (
            <Task key={task.id} task={task} handleRemoveTask={handleRemoveTask} />
        ))}
    </StyledTaskList>
);

export default TaskList;

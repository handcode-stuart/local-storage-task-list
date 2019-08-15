import React from 'react';
import PropTypes from 'prop-types';
import StyledTaskList from './styles';
import Task from '../Task/Task';

const TaskList = ({ tasks, handleRemoveTask }) => {
    return (
        <StyledTaskList>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    handleRemoveTask={handleRemoveTask}
                />
            ))}
        </StyledTaskList>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleRemoveTask: PropTypes.func.isRequired
};

export default TaskList;

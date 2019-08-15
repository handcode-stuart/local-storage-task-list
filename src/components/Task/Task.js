import React from 'react';
import PropTypes from 'prop-types';
import StyledTask from './styles';

const Task = ({ task: { id, body }, handleRemoveTask }) => {
    const handleClick = () => {
        handleRemoveTask(id);
    };

    return <StyledTask onClick={handleClick}>{body}</StyledTask>;
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    handleRemoveTask: PropTypes.func.isRequired
};

export default Task;

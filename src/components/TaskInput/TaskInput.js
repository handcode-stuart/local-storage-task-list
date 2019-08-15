import React, { useState } from 'react';
import StyledTaskInput from './styles';
import PropTypes from 'prop-types';

const TaskInput = ({ onSubmit }) => {
    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (task !== '') {
            const id = `${Date.now()}`;

            const taskObj = { id, body: task };

            onSubmit(taskObj);

            setTask('');
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

TaskInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default TaskInput;

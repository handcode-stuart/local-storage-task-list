import styled from 'styled-components';

export default styled.li`
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

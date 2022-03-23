import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform : uppercase;
    font-size : 1.2rem;
    background : transparent;
    border: 1px solid var(--mainBlue);
    color : var(--mainWhite);
    border-radius : .5rem;
    &:hover {
        background : var(--lightBlue);
        color : var(--mainBlue)
    }
`
import styled from 'styled-components';

export const TaskContainer = styled.div`
    width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    backround-color: #E9DCCD;
    border: 1px solid #613A43;
    border-radius: 4px;
    margin-bottom: 3px;
`;

export const TextBox = styled.div`
    width: 74%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.8em;
    margin-left: 7px;
`;

export const ButtonBox = styled.div`
    width: 13%;
    height: 35px;
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    font-size: 0.75em;
    color: #E9DCCD;
    text-align: center;
    background-color: #613A43;
    padding: 0.35em 0.7em;
    border-radius: 6px;
    border: 2px solid #613A43;
    margin-right: 7px;
    
    :hover {
        cursor: pointer;
        background-color: #E3BAB3;
        color: #36384C;
    }
    :focus {
        background-color: #E3BAB3;
        color: #36384C;
    }
`;
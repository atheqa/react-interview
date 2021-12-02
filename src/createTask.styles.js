import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.form`
    width: 350px;
    display: flex;
    align-items: center;
    background-color: #fcf5ed;
    border: 1px solid #613A43;
    border-radius: 4px;
    margin-top: 30px;
`;

export const Input = styled.input`
    width: 80%;
    font-size: 0.8em;
    color: #212121;
    background-color: #fcf5ee;
    border: 0 solid;
    padding: 6px;
    
    :focus {
        outline: none;
    }
`;

export const Button = styled.button`
    width: 20%;
    height: 30px;
    font-size: 0.8em;
    color: #36384C;
    text-align: center;
    background-color: #849974;
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 2px solid #b5b5b5;
    margin: 3px 7px 3px auto;

    :hover {
        cursor: pointer;
        background-color: #a3c28c;
    }
    :focus {
        background-color: #a3c28c;
    }
`;
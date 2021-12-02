import React from 'react'
import { Button, ButtonBox, TaskContainer, TextBox } from './task.styles';

export const Task = (props) => {

    const values = (props.todo.complete ? 
        {color: '#aef5b8', text: 'Complete'}:
        {color: '#fcf6f5', text: 'Incomplete'});
        
    return (
        <TaskContainer style={{backgroundColor: values.color}}>
            <TextBox><h3>{props.todo.name}</h3></TextBox>
            <ButtonBox>
                <Button
                    className="btn"
                    onClick={() => props.onClick(props.todo.id)}>
                    {values.text}
                </Button>
            </ButtonBox>
            <ButtonBox>
                <Button
                    className="btn"
                    onClick={() =>
                        props.onRemoveClick(props.todo.id)
                    }>
                    Remove
                </Button>
            </ButtonBox>
        </TaskContainer>
    );
}

export default Task;
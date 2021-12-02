import React from 'react'
import { Button, Container, Input, MainContainer } from './createTask.styles';

export const CreateTask = (props) => {
    return (
        <MainContainer>
            <Container onSubmit={props.onSubmit}>
                <Input
                    placeholder="Add new todo"
                    value={props.newTodoName}
                    onChange={props.onInputChange}
                />
                <Button
                    type="submit"
                    value="Submit">
                    Submit
                </Button>
            </Container>
        </MainContainer>
    );
}

export default CreateTask;
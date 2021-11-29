//this was already an arrow function in original version
import React from 'react'
import Hello from './Hello';

export const TodoItems = (props) => {
    const retVal = [];

    for (let i = 0; i < props.todos.length; i++) {
        const todo = props.todos[i];
        retVal.push(
            <Hello
                key={todo.id}
                todo={todo}
                onClick={props.onClick}
                onRemoveClick={props.onRemoveClick}
            />
        );
    }
    return retVal;
};

export default TodoItems;
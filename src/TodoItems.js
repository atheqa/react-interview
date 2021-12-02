import React from 'react'
import Task from './Task';

export const TodoItems = (props) => {
    const retVal = [];

    for (let i = 0; i < props.todos.length; i++) {
        const todo = props.todos[i];
        retVal.push(
            <Task
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
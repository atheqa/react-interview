import React, {useState} from 'react';
import './App.css';
import {Bar} from './Bar';
import {TodoItems} from './TodoItems';

const initTodos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
];

function App(props) {
    const [newTodoName, setNewTodoName] = useState('');
    const [todos, setTodos] = useState(initTodos);

    const generateNewId = () => {
        return todos.length + 1;
    }

    const onSubmit = (event) => {
        event.preventDefault();

        var newTodos = todos.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });
        setTodos(newTodos);
        setNewTodoName('');
    }

    const onClick = (id) => {
        var todoItems = todos.slice();
        for (let i = 0; i < todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }
        setTodos(todoItems);
    }

    const onChange = (event) => {
        setNewTodoName(event.target.value);
    }
    const onRemoveClick = (id) => {
        //implement this logic
        console.log('Remove Item!');
    }

        return (
            <div className="">
                <TodoItems
                    onClick={onClick}
                    onRemoveClick={onRemoveClick}
                    todos={todos}
                />
                <Bar
                    newTodoName={newTodoName}
                    onSubmit={onSubmit}
                    onInputChange={onChange}
                />
            </div>
        );
}

export default App;

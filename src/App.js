import React, {useState} from 'react';
/* import './App.css'; */
import {CreateTask} from './CreateTask';
import {TodoItems} from './TodoItems';
import {MainContainer} from './App.styles';

const initTodos = [
    {id: 0, name: 'Go to the supermarket', complete: false},
    {id: 1, name: 'Call Alice', complete: false},
    {id: 2, name: 'Ask Alice to call Bob', complete: false},
    {id: 3, name: 'Do the dishes', complete: false},
    {id: 4, name: 'Change car tyres', complete: false}
];

function App() {
    const [newTodoName, setNewTodoName] = useState('');
    const [todos, setTodos] = useState(initTodos);
    const [id, setId] = useState(todos.length);

    const generateNewId = () => {
        const newId = id + 1;
        setId(newId);
        return newId;
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newTodos = todos.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });
        setTodos(newTodos);
        setNewTodoName('');
    }

    const onClick = (id) => {
        const todoItems = todos.slice();
        for (let i = 0; i < todos.length; i++) {
            if (todoItems[i].id === id) {
                const newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }
        setTodos(todoItems);
    }

    const onChange = (event) => {
        setNewTodoName(event.target.value);
    }
    const onRemoveClick = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <MainContainer>
            <TodoItems
                onClick={onClick}
                onRemoveClick={onRemoveClick}
                todos={todos}
            />
            <CreateTask
                newTodoName={newTodoName}
                onSubmit={onSubmit}
                onInputChange={onChange}
            />
        </MainContainer>
    );
}

export default App;

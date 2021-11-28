//this makes the to-do change background color when the next button is clicked
import React from 'react'

export const Hello = (props) => {

    const values = (props.todo.complete ? 
        {color: 'lightgreen', text: 'Complete'}:
        {color: 'pink', text: 'Incomplete'});
        
    return (
        <div className="wrapper" style={{backgroundColor: values.color}}>
            <h3>{props.todo.name}</h3>
            <button
                className="btn"
                onClick={() => props.onClick(props.todo.id)}>
                {values.text}
            </button>
            <button
                className="btn"
                onClick={() =>
                    props.onRemoveClick(props.todo.id)
                }>
                Remove from list
            </button>
        </div>
    );
}

export default Hello;
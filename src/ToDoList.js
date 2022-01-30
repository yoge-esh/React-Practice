import React from 'react';
import './ToDoList.css';

function ToDoList(props) {
    return (
        <>
        <div className='todo-style'>
            <i 
            className='fa fa-times' 
            aria-hidden='true'
            onClick={() =>{
                props.onSelect(props.id);
            }}/>
            <li>{props.item}</li>

        </div>
        </>);
}

export default ToDoList;

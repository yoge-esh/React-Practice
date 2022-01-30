import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'; // Compare this snippet from React-Practice\src\ToDoList.js:

function App() {
    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const handleEvent = (event) => {
        setInputList(event.target.value); //setInputList is the name of the state variable
    };

    const listOfItems = (event) => {
        event.preventDefault(); //prevent default action of form submit which is on page refresh
        setItems((prevItems) => {
            return [...prevItems, inputList]; //adds the inputList to the array
        });
        setInputList(''); //clear the input field
    }

    const deleteItem = (id) => {
        console.log('delete');
        setItems((prevItems) => { //prevItems is the name of the state variable
            return prevItems.filter((item, index) => { //filter the array and return the items that are not the id
                return index !== id; //returns the item if the index is not equal to the id
            });
        });
    }

    return (
        <>
            <div className='main-div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text"
                        placeholder="Enter Task" 
                        className='input_box'
                        onChange={handleEvent}
                        value={inputList} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {items.map((item, index) => ( //map the array and return the items
                            <ToDoList key={index} id={index} item={item} onSelect={deleteItem} /> //passing the item to ToDoList component
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;

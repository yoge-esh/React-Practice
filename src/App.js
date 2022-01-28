import React, {useState} from 'react';
import './App.css';

function App() {
    const [welcome, setWelcome] = useState('');

    const inputEvent = (event) =>{
        console.log(event.target.value);
    }
    const submit = () =>{
        setWelcome(inputEvent)
    }
    return (
        <>
            <div>
                <h2>Welcome to React Form: {welcome} </h2 >
                <input type='text' placeholder='Enter your Name...' onChange={inputEvent}/>
                <button onClick={submit}>Click Me</button>
            </div>
        </>
    );
}

export default App;

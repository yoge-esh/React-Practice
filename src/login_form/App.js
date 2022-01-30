import React, { useState } from "react";
import "./App.css";

function App() {
    const [firstName, setFirstName] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        textarea: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setFirstName((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const submit = (event) => {
        event.preventDefault(); //prevent default action of form submit which is on page refresh
        alert('form submmitted');
    };



    return (
        <>
            <div>
                <h2>Welcome to React Form: {firstName.fname} {firstName.lname}</h2>
                <p>{firstName.email}</p>
                <p>{firstName.password}</p>
                <p>{firstName.textarea}</p>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Enter your First Name..."
                        onChange={inputEvent}
                        value={firstName.fname}
                        name="fname"
                    />
                    <input
                        type="text"
                        placeholder="Enter your Last Name..."
                        onChange={inputEvent}
                        value={firstName.lname}
                        name="lname"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        onChange={inputEvent}
                        value={firstName.email}
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password..."
                        onChange={inputEvent}
                        value={firstName.password}
                        name="password"
                    />
                    <textarea
                        rows={4}
                        cols={50}
                        type="text"
                        placeholder="Enter your message..."
                        onChange={inputEvent}
                        value={firstName.textarea}
                        name="textarea"
                    />


                    <button type="submit">Click Me</button>
                </form>
            </div>
        </>
    );
}

export default App;
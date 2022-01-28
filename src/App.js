import React, {useState} from 'react';
import './App.css';

function App() {
  let color = '#8e44ae';
  const [bg, setBg] = useState(color);
  const [name, setName] = useState('Click me');
  // const [doube, setDouble] = useState(name);

  const bgChnage = () => {
    console.log('clicke!')
    setBg(color = 'yellow')
    setName('Click me Back')
  }
  const bgback = () =>
  {
    console.log('double clicked');
    setBg(color = '#8e44ae');
    setName('we are back!')
  }


  return (
    <div style={{ backgroundColor: bg }}>
      <div>
        <h2 className='content'>Welcome to Events in React Js </h2>
        {/* <button  onClick ={bgChnage} onDoubleClick={bgback}>{name}</button> */}
        <button  onMouseEnter ={bgChnage} onMouseLeave={bgback}>{name}</button>
      </div>
    </div>
  );
}

export default App;
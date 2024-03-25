// src/App.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (label === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + label);
    }
  };

  return (
    <div className='calculator'>
      <Display value={displayValue} />
      <div className='button-container'>
        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="/" onClick={handleClick} />
      </div>
      <div className='button-container'>
        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="*" onClick={handleClick} />
      </div>
      <div className='button-container'>
        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="-" onClick={handleClick} />
      </div>
      <div className='button-container'>
        <Button label="0" onClick={handleClick} />
        <Button label="C" onClick={handleClick} />
        <Button label="=" onClick={handleClick} />
        <Button label="+" onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;

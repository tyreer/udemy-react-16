import React from 'react';
import './Person.css';

// {props.children &&
//   <h2>{props.children}</h2>
// }

const Person = (props) => {
  return (
    <div className="Person">
      <h1 onClick={props.addSymbol}>Hi my name is {props.name}{props.symbol}</h1>
      <input type="text" onChange={props.handleInputChange} value={props.name} />
      <p onClick={props.deletePerson}>Delete</p>
    </div>
  )
}

export default Person;

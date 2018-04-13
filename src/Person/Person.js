import React from 'react';
import './Person.css';
import Radium from 'radium';

// {props.children &&
//   <h2>{props.children}</h2>
// }

const Person = (props) => {
  const style= {
    '@media (min-width: 600px)': {
      color: 'white'
    }
  }

  return (
    <div className="Person" style={style}>
      <h1 onClick={props.addSymbol}>Hi my name is {props.name}{props.symbol}</h1>
      <input type="text" onChange={props.handleInputChange} value={props.name} />
      <p onClick={props.deletePerson}>Delete</p>
    </div>
  )
}

export default Radium(Person);

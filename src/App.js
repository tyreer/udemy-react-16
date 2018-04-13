import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'id1', name: "Joe", symbol: "!" },
      { id: 'id2', name: "Joeseph", symbol: "@" },
      { id: 'id3', name: "Jake", symbol: "*" },
    ],
    textValue: '',
    isExpanded: false,
  }

  togglePeople = () => {
    this.setState({isExpanded: !this.state.isExpanded})
  }

  // switchNameHandler = () => {
  //   const swapped = [this.state.people[this.state.people.length-1], ...this.state.people]
  //     .slice(0, this.state.people.length);
  //
  //   this.setState({people: swapped})
  // }

  addSymbol = (addSymbol) => {
    const symbolAdded = this.state.people.map(person => ({id: person.id, name: person.name, symbol: person.symbol += addSymbol}) )

    this.setState({
      people: symbolAdded,
    })
  };


  handleInputChange = (e, index) => {
    const updatedPeople = [...this.state.people];
    updatedPeople[index].name = e.target.value;
    this.setState({people: updatedPeople})
  };
  // handleInputChange = (index, e) => {
  //   const updatedPeople = [...this.state.people];
  //   updatedPeople[index].name = e.target.value;
  //   this.setState({people: updatedPeople})
  // };
// handleInputChange={this.handleInputChange.bind(this, index)}


  deletePerson = (index) => {
    const removedList = [...this.state.people.slice(0, index), ...this.state.people.slice(index+1)];
    this.setState({people: removedList})
  };

  render() {

    const style = {
      color: 'green',
      ':hover': {
        background: 'green',
        color: 'white',
      },
    }

    const divClassName = ['App'];

    let people = null;

    if(this.state.isExpanded) {
      people = (
        <div>
        { this.state.people.map((person, index) =>
          <Person
            key={person.id}
            addSymbol={this.addSymbol.bind(this, person.symbol[0])}
            handleInputChange={(e) => {this.handleInputChange(e, index)}}
            deletePerson={this.deletePerson.bind(this, index)}
            name={person.name}
            symbol={person.symbol} />)}
        </div>
      );

      style.color = 'red';
      style[':hover'] = {
        background: 'red',
        color: 'white',
      }

      divClassName.push('App--is-expanded');
    }

    return (
      <StyleRoot>
        <div className={divClassName.join(' ')}>
          <button style= {style} onClick={this.togglePeople}>Switch Name</button>
          {people}
        </div>
      </StyleRoot>
    );
  }
}

// { this.state.isExpanded ?
//   <div>
//     {this.state.people.map((person, index) =>
//     <Person
//       key={index}
//       addSymbol={this.addSymbol.bind(this, person.symbol[0])}
//       name={person.name}
//       symbol={person.symbol} />)}
//   </div> : null
// }

// {this.state.isExpanded &&
//   <div>
//     {this.state.people.map((person, index) =>
//     <Person
//       key={index}
//       addSymbol={this.addSymbol.bind(this, person.symbol[0])}
//       name={person.name}
//       symbol={person.symbol} />)}
//   </div>
// }

export default Radium(App);

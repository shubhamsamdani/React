import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28},
            { name: 'Shubham', age: 24}
        ]
    }

    switchNameHandler = () => {
        console.log('Was Click');
        //this.
    }

    render() {
        return (
            <div className="App">
                <h1> Hi, I'm new react developer Shubham Samdani </h1>
                <button onClick={this.switchNameHandler}> Swtich Name </button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies: Chess, Sketching</Person>
                <Person name="Sakshi" age="22" />
                <Person name="CA" age="10" />
            </div>
        );


        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am Sam'));
    }

}

export default App;

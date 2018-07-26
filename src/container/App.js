import React, { Component } from 'react';
import WithClass from '../hoc/WithClass';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from'./App.css';

class App extends Component {
  state = {
    visibleH1:true,
    persons:[
      {id:'a',name:'Telu',age:12},
      {id:'ba',name:'Hulo',age:22},
      {id:'mba',name:'Kodu',age:32}
    ],
    otherState:'Some other value',
    showPersons:false,
    toggleCount:0
  }

  switchNameHandler = (newName)=>{
    this.setState(
      {
        persons:[
          {id:'a',name:newName,age:12},
          {id:'ba',name:'Hulo',age:22},
          {id:'mba',name:'Kodu',age:32}
        ]
      }
    );
  }
  deletePersonHandler = (index)=>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons});   
  }
  togglePersons = () => {
    this.setState((oldState,props)=>{
      return {
        showPersons: !oldState.showPersons,
        toggleCount : oldState.toggleCount+1
      }
    });
  }
  onChangeEventHandler(event,id){
    const name = event.target.value;
    const personIndex = this.state.persons.findIndex(p=>p.id===id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name  = name;
    const persons = [
      ...this.state.persons
    ];
    persons[personIndex] = person;
    this.setState({persons});
  }
  clickHappen(){
    this.setState({
      visibleH1:!this.state.visibleH1
    })
  }
  checkVisibleH1(){
    if(this.state.visibleH1)
      return <h1>I am here</h1>
    else
      return null;
  }
  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
        persons = {this.state.persons}
        deletePerson={(index)=>this.deletePersonHandler(index)} 
        changePerson={(event,id)=>this.onChangeEventHandler(event,id)}/>;  
    }
    var a = 
      <Cockpit 
          hi= {false}
          togglePersons = {this.togglePersons}
          alterName = {this.switchNameHandler}
          persons={this.state.persons}
          showPersons = {this.state.showPersons}>
            Hi 
            <button onClick={()=>this.clickHappen()}>Click Me</button>
          </Cockpit>;

    return (
      <div>
        {a}
        {persons}
        
        {this.checkVisibleH1()}
      </div>
    );
    //return React.createElement('div',{className:'App'},
    //  React.createElement('h1',null,'hi there!'));
  }
}

export default WithClass(App,classes.App);

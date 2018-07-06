import React from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

const Persons = props =>  props.persons.map((person,index)=>{
    return (<Person
        click = {()=>props.deletePerson(index)}
        change = {(event)=>props.changePerson(event,person.id)}
        name={person.name} 
        key={person.id}>
        {
            index===0?
                <p>
                <span>I Love to play Fifa</span>
                <br/>
                <span>New Line</span>
                </p>
            :   null
        }
    </Person>)
});
Persons.propTypes = {
    click:PropTypes.func,
    change:PropTypes.func,
    name:PropTypes.string
}
export default Persons;
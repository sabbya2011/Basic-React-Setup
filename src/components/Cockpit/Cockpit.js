import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    let style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid white',
        padding:'10px',
        cursor:'pointer'
    }
    if(props.showPersons){
        style.backgroundColor = "red";
    }


    let assignedClasses = [];
    if(props.persons.length>=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length>=1){
        assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            <p>Hi There</p>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button style={style} onClick={props.togglePersons}>Toggle Persons</button>
            <button onClick={()=>props.alterName('Babu')}>Switch Name</button>
        </Aux>
    )
};

export default Cockpit;
import React from 'react';
import classes from './Person.css';
const person = (props) => {
    const style = {
        backgroundColor:"#3CB3E7"
    }
    return (
        <div className={classes.person}>
            <p onClick={props.click} style={style}>
                I am {props.name} and I am {Math.floor(Math.random()*30)}years old
            </p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change}/>
        </div>
    )
}
export default person;
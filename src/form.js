import React, { Component } from 'react';
import './form.css';
import Result from './result';

class FormMade extends Component {

    render() {

    
    let name,Class,roll;
    function onbtnclick  (event)  {
         name = document.getElementById('name').value;
        // console.log(name);
         Class = document.getElementById('class').value;
        // console.log(name);
         roll = document.getElementById('roll').value;
        console.log(name);
        console.log(Class);
        console.log(roll);
        // console.log(event);
        // console.log("sdasb");
    }
    
    return (
        <div className ="formdiv">
            <label>Name: </label><input type="text" id="name" placeholder="Enter your name"/><br/>
            <label>Class: </label><input type="text" id="class" placeholder="Enter your name"/><br/>
            <label>Roll Number: </label><input type="text" id="roll" placeholder="Enter your name"/><br/>
            <button onClick={onbtnclick} id="btn">Submit</button><br/><br/><br/><br/>
            <Result 
            name={this.name} 
            />
        </div>
    );
}
}

export default FormMade;
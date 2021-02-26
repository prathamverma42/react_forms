import React from 'react';
import './form.css';

const FormMade = () => {

    function onbtnclick  (event)  {
        const name = document.getElementById('name').value;
        // console.log(name);
        const Class = document.getElementById('class').value;
        // console.log(name);
        const roll = document.getElementById('roll').value;
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
            {/* <result/> */}
        </div>
    );
}
export default FormMade;
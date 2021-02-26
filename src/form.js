import React,{Component} from 'react';
import Result from './result';

class Formmade extends Component{
    constructor(props){
        super(props);

        this.state={
            fname: '',
            lname: '',
            password: ''
        }
    }
    
    onChangeValue = (event) => {
        // console.log("hello");
        console.log(this.state.fname,this.state.lname,this.state.password);
        this.setState({
            fname : document.getElementById("fname").value,
            lname : document.getElementById("lname").value,
            password : document.getElementById("password").value,
        })
        
    }
    onSubmit = () =>{
        alert(`${this.state.fname} --- ${this.state.lname} --- ${this.state.password}`);
    }

    render(){
    // function onChangeValue(){
    //     console.log("hello");
    // }         
        return(
            <div>
                <label>First Name: </label><input type="text" id="fname" value={this.state.fname} onChange={this.onChangeValue} placeholder="Enter firstd name"/><br/>
                <label>Last Name: </label><input type="text" id="lname" value={this.state.lname} onChange={this.onChangeValue} placeholder="Enter Last name"/><br/>
                <label>Password:</label><input type="text" id="password" value={this.state.password} onChange={this.onChangeValue} placeholder="Enter password"/><br/>
                <button type="submit" onClick={this.onSubmit}>Submit</button><br/><br/>
                <Result name={this.state.fname} Class={this.state.lname} roll={this.state.password}/>
            </div>
        );
    }
}
export default Formmade;






































// import React, { Component } from 'react';
// import './form.css';
// import Result from './result';

// class FormMade extends Component {

//     render() {

    
//     let name,Class,roll;
//     function onbtnclick  (event)  {
//          name = document.getElementById('name').value;
//         // console.log(name);
//          Class = document.getElementById('class').value;
//         // console.log(name);
//          roll = document.getElementById('roll').value;
//         console.log(name);
//         console.log(Class);
//         console.log(roll);
//         // console.log(event);
//         // console.log("sdasb");
//     }
    
//     return (
//         <div className ="formdiv">
//             <label>Name: </label><input type="text" id="name" placeholder="Enter your name"/><br/>
//             <label>Class: </label><input type="text" id="class" placeholder="Enter your name"/><br/>
//             <label>Roll Number: </label><input type="text" id="roll" placeholder="Enter your name"/><br/>
//             <button onClick={onbtnclick} id="btn">Submit</button><br/><br/><br/><br/>
//             <Result 
//             name={this.name} 
//             />
//         </div>
//     );
// }
// }

// export default FormMade;
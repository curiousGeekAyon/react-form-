import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  let[input,setInput]=useState({
     fname:"",
     lname:"",
     email:""
  });
function takeInput(e)
          {
             let inputvalue=e.target.value;
             let name=e.target.name;
             setInput((preValue)=>{
                if(name === "fName"){
                  return {
                    fname:inputvalue,
                    lname:preValue.lname,
                    email:preValue.email
                   };
                  }
                else if(name==="lName")
                {
                  return{
                    fname:preValue.fname,
                    lname:inputvalue,
                    email:preValue.email
                  };
                } 
               else{
                     return {
                        fname:preValue.fname,
                        lname:preValue.lname,
                        email:inputvalue
                     }
               }   
             });
          }
let[name,setName]=useState({
    fname:"",
    lname:""
});
function giveOutput(event)
       {
         event.preventDefault();
         setName({
             fname:input.fname,
             lname:input.lname,
             email:input.email
         });
       }          
  return (<>
     <form onSubmit={giveOutput}>
     <div  className='wrapper'>
    <div >
    <h1 className='h1style'>hi, {name.fname} {name.lname}</h1>
    <h1 className='h1style'>{name.email}</h1>
    <input type="text" onInput={takeInput} placeholder='Enter your First Name' className='inputStyle' value={input.fname} name="fName"/>
    <input type="text" onInput={takeInput} placeholder='Enter your Last Name' className='inputStyle' value={input.lname}name="lName"/>
    <input type='email' onInput={takeInput} placeholder='Enter your email'  className='inputStyle'  value={input.email} name="email"/>
    </div>
    <button type="submit">Click it👌</button>
    </div>
    </form>
    </>
  );
}

export default App;

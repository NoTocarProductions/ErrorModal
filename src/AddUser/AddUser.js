import React, { useState } from "react";
import './AddUser.css';
import Button from '../ButtonWrapper/Button';

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const userObject = {
        username: enteredUsername,
        age: Number(enteredAge),
        id: Math.random().toString()
    };
    props.onAddUser(userObject);
    setUsername("");
    setAge("");
  };
  let buttonText = "Add User";
  let buttonType = "submit";
  return (
    <form className="input" onSubmit={SubmitHandler}>
      
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameHandler}
        />
      
      
        <label htmlFor="Username">Age (Years)</label>
        <input 
        type="number" 
        id="age" 
        value={enteredAge} 
        onChange={ageHandler} 
        />
      
      
        <Button innerText={buttonText} submit={buttonType}/>
      
    </form>
  );
};

export default AddUser;

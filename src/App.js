import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [input, setInput] = useState({
    name: '',
    password: '',
    email: '',
    phone: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user', input);
      setInput({
        name: '',
        password: '',
        email: '',
        phone: ''
      });
      alert("User Register Successfully");
      
      console.log(response);
        
    } catch (error) {
      console.error('There was an error!', error);
    }
   
  };  

  return (
    <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'flex-start' }}>
        <h1>User Register</h1>
        <label>Username</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={input.name}
          placeholder="Enter Username"
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Enter Password"
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
          placeholder="Enter Email"
        />
        <br />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={input.phone}
          placeholder="Enter Phone Number"
        />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;

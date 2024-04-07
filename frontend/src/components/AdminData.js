import React, { useState } from 'react';
import "../styles/AdminStyles.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminData = () => {

  function admin_login(){
    fetch('/admin_login',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,password})
    })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        setStatus(response.message)
      }
      // Parse the JSON body of the response
      return response.json();
    })
    .then(data => {
      setStatus(data.message);
      if (data.message=="Login successful"){
      setTimeout(() => {
        navigate('/adminhomepage');
      }, 1000);}
    })
    .catch(error => {
      // Handle errors
      setStatus(error)
    });

  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[status,setStatus]= useState('')
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  
  // const handleLogin = () => {
  //   // Here you can implement your authentication logic
  //   // For simplicity, let's just check if username and password are not empty
  //   if (username !== '' && password !== '') {
  //     // Redirect to adminhomepage
  //     navigate('/adminhomepage');
  //   } else {
  //     alert('Please enter a valid username and password');
  //   }
  // };

  return (
    <div className="login-container1">
      <div>
        <h1>Admin Login</h1>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button onClick={admin_login}>Login</button>
      </div>
      {status}
    </div>
  );
};

export default AdminData;

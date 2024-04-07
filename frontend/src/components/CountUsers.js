import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CountUsersStyles.css'


function CountUsers (){
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {

    fetch('/get_claims',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        console.log(response.message)
      }
      // Parse the JSON body of the response
      return response.json();
    })
    .then(data => {
      const claims = data;
        setUserCount(claims.length); 
    })
    .catch(error => {
      // Handle errors
      console.log(error)
    });
   
  }, []); // empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className='count-box'>
      <p>Number of Claims: {userCount}</p>
      <br></br>     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
        
  );
};

export default CountUsers;

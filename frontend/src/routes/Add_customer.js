import React, { useState } from 'react';
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminSidebarStyles.css";
import '../styles/Addcustomer.css'
import { sex,marital_status,policy_type,vehicle_category,vehicle_price,past_no_claims,address_change_claims,base_policy } from "../components/Dictionaries";

import { useNavigate } from 'react-router-dom';
function Add_customer() {
  // const dictionaries = [
  //   { name: 'sex', dictionary: sex },
  //   { name: 'marital_status', dictionary: marital_status },
  //   { name: 'policy_type', dictionary: policy_type },
  //   { name: 'vehicle_category', dictionary: vehicle_category },
  //   { name: 'vehicle_price', dictionary: vehicle_price },
  //   { name: 'past_no_claims', dictionary: past_no_claims },
  //   { name: 'address_change_claims', dictionary: address_change_claims },
  //   { name: 'base_policy', dictionary: base_policy }
  // ];



  function add_customer(){
    const policy_number = Math.random().toString().substring(2);
    const past_no_claims = 'none';
    const address_change_claims='no change';
    const deductible = 400;
    console.log("state",cust_data)

    fetch('/add_customer',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cust_data,policy_number,past_no_claims,address_change_claims})
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
    })
    .catch(error => {
      // Handle errors
      setStatus(error)
    });


  }
  const[status,setStatus]= useState('')
  const [cust_data, setCust_data] = useState({
    policy_holder_name:'', sex:'', marital_status:'', policy_type:'', vehicle_category:'', vehicle_price:'',  base_policy:'',policy_holder_email:'',deductible:''
  });
  const navigate = useNavigate();

  // const handleInputChange = (event) => {
  //   setCust_data({
  //     ...cust_data,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setCust_data(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };
  return (
    <>
      <AdminSidebar />
      <div className="login-container">
        <input
          type="text"
          placeholder="Policy holder name"
          value={cust_data.policy_holder_name}
          onChange={(e) => handleInputChange(e, 'policy_holder_name')}
        />
        <br />
        <input
          type="text"
          placeholder="Policy holder email"
          value={cust_data.policy_holder_email}
          onChange={(e) => handleInputChange(e, 'policy_holder_email')}
        />
        <br/>
        <label >Sex: </label>
        <select
          value={cust_data.sex}
          onChange={(e) => handleInputChange(e, 'sex')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        
        <br />
        <br />
        <label>Marital Status: </label>
        <select 
          value={cust_data.marital_status}
          onChange={(e) => handleInputChange(e, 'marital_status')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Single">Single</option>
          <option value="Divorced">Divorced</option>
          <option value="Married">Married</option>
          <option value="Widow">Widow</option>
        </select>
        
        <br />
        <br />
        <label>Policy Type: </label>
        <select 
          value={cust_data.policy_type}
          onChange={(e) => handleInputChange(e, 'policy_type')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Sedan - All Perils">Sedan - All Perils</option>
          <option value="Sedan - Collision">Sedan - Collision</option>
          <option value="Sedan - Liability">Sedan - Liability</option>
          <option value="Sport - All Perils">Sport - All Perils</option>
          <option value="Sport - Collision">Sport - Collision</option>
          <option value="Sport - Liability">Sport - Liability</option>
          <option value="Utility - All Perils">Utility - All Perils</option>
          <option value="Utility - Collision">Utility - Collision</option>
          <option value="Utility - Liability">Utility - Liability</option>
          
        </select>
        
        <br />
        <br />
        <label>Vehicle Category: </label>
        <select 
          value={cust_data.vehicle_category}
          onChange={(e) => handleInputChange(e, 'vehicle_category')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Sedan">Sedan</option>
          <option value="Sport">Sport</option>
          <option value="Utility">Utility</option>
        </select>
        
        <br />
        <br />
        <label>Vehicle Price Range: </label>
        <select 
          value={cust_data.vehicle_price}
          onChange={(e) => handleInputChange(e, 'vehicle_price')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="20000 to 29000">17 Lakhs to 24 Lakhs</option>
          <option value="30000 to 39000">25 Lakhs to 32 Lakhs</option>
          <option value="40000 to 59000">33 Lakhs to 49 Lakhs</option>
          <option value="60000 to 69000">50 Lakhs to 69 Lakhs</option>
          <option value="less than 20000">less than 17 Lakhs</option>
          <option value="more than 69000">more than 70 Lakhs</option>
        </select>
        
        <br />
        
        <br />
        <label>Base Policy: </label>
        <select 
          value={cust_data.base_policy}
          onChange={(e) => handleInputChange(e, 'base_policy')}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="All Perils">All Perils</option>
          <option value="Collision">Collision</option>
          <option value="Liability">Liability</option>
        </select>
        
        <br />
        <br/>
        <input
          type="number"
          placeholder="Deductible"
          value={cust_data.deductible}
          onChange={(e) => handleInputChange(e, 'deductible')}
        />
       
        <br></br>
        <br/>
        <button onClick={add_customer}>Add customer</button>
        
        </div>
        <div>
        {status}
        </div>

    </>
  
  );
}

export default Add_customer;

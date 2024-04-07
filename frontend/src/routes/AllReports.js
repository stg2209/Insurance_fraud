import React from "react";
import "../styles/AdminSidebarStyles.css";
import AdminSidebar from "../components/AdminSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AllReportsStyles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
function Reports() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/get_claims")
      .then((users) => console.log(users.data))
      .catch((err) => console.log(err));
  }, []);

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
      setUsers(data)
    })
    .catch(error => {
      // Handle errors
      console.log(error)
    });
  }, []);


  //Delete function
  // const deleteUser = (id,customer_id) => {
  //   if(window.confirm(`Are you sure you want to delete user: ${customer_id}`)){

  //   }else{

  //   }
  // };


  const deleteUser = () => {
    alert("Are you sure you want to delete")
  }

  return (
    <>
    <AdminSidebar />
    <br></br><br></br>
      <div className="w-100 vh-100 d-flex">
        <div className="w-50">
          <table className="table">
            <thead>
              <tr>
                <th>Policy Number</th>
                <th>Policy Holder name</th>
                <th>Policy Type</th>
                <th>Vehicle Category</th>
                <th>Vehicle Price</th>
                <th>Deductible</th>
                <th>Past number of claims</th>
                <th>Address Change claims</th>
                <th>Base Policy</th>
                <th>Fraudulent</th>
                {/* <th>is_fraudulent</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return<tr>
                  <td>{user.policy_number}</td>
                  <td>{user.policy_holder_name}</td>
                  <td>{user.policy_type}</td>
                  <td>{user.vehicle_category}</td>
                  <td>{user.vehicle_price}</td>
                  <td>{user.deductible}</td>
                  <td>{user.past_no_claims}</td>
                  <td>{user.address_change_claims}</td>
                  <td>{user.base_policy}</td>
                  <td>{user.fraudulent}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Reports;
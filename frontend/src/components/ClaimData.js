
import React from "react";
import "../styles/ClaimDataStyles.css";
import { useState } from "react";

function ClaimData () {
  const imageUrl = 'https://previews.123rf.com/images/arrow/arrow1505/arrow150500022/40383202-insurance-background.jpg'; // Replace with your image path

    const [formData, setFormData] = useState({
    policy_number: '',
    policy_holder_name: '',
    month: '',
    week_of_month: '',
    day_of_week: '',
    accident_area: '',
    month_claimed: '',
    week_of_month_claimed: '',
    day_of_week_claimed: '',
    fault: '',
    age_of_vehicle: '',
    police_report_filed: '',
    witness_present: '',
    no_of_supplements: '',
    age:'',
    // field15: '',
    // field16: '',
    // field17: '',
    // field18: '',
    // field19: '',
    // field20: '',
    // field21: '',
    // field22: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const[status,setStatus]= useState('')
 
  const claim_details = (e) =>{
    e.preventDefault();
    // Access form data here
    
      fetch('/claim',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formData})
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
  
    
    //console.log(formData);
    // You can perform further actions like submitting the form data to a backend API
  };

    return (
      <>
      <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="claimcontainer" >
          <h1>Car Insurance Claim Form</h1>
          <p>You had your car incident? We will help you with your claim.</p>

          <form onSubmit={claim_details}>
          <div className="policy-details">
              <h3>Policy Details:</h3>
              <div className="grid-container">
              <div className="div4">
                <label htmlFor="textInput">Policy Number: </label>
                <input type="text" id="textInput" name="policy_number"
          value={formData.policy_number}
          onChange={handleInputChange} required />
              </div>
              <div className="div4">
                <label htmlFor="textInput">**Policy Holder Name: </label>
                <input type="text" id="textInput" name="policy_holder_name"
          value={formData.policy_holder_name}
          onChange={handleInputChange}required />
              </div>
              </div>
            </div>
            <div className="date-of-accident">
              <h3>Date of Accident:</h3>
              <div className="grid-container">


                <div className="div1">
                  <label htmlFor="textInput">Month: </label>
                  <br></br>
                  <select id="textInput"
          value={formData.month}
          onChange={handleInputChange} name="month">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
                </div>


                <div className="div2">
                  <label htmlFor="textInput">Week of Month: </label>
                  <br></br>
                  <input type="number" id="textInput" name="week_of_month"
          value={formData.week_of_month}
          onChange={handleInputChange} max={4} required />
                </div>


                <div className="div3">
                  <label htmlFor="textInput">Day of Week: </label>
                  <br></br>
                  <select 
          value={formData.day_of_week}
          onChange={handleInputChange} name="day_of_week">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
                </div>
              </div>
            </div>

            <div className="accident-area">
              <h3>Accident Area:</h3>
              <div className="grid-container">


              <div className="div4">
                <label htmlFor="textInput">Accident Area: </label>
                <br></br>
                <label>
          <input
            type="radio"
            name="accident_area"
            value="Rural"
            checked={formData.accident_area === 'Rural'}
            onChange={handleInputChange}
          />
          Rural    
        </label>
        <label>
          <input
            type="radio"
            name="accident_area"
            value="Urban"
            checked={formData.accident_area === 'Urban'}
            onChange={handleInputChange}
          />
             Urban
        </label>
              </div>
              </div>
            </div>



            <div className="date-of-claim">
              <h3>Date of Claim:</h3>
              <div className="grid-container">


              <div className="div5">
                <label htmlFor="textInput">Month Claimed: </label>
                <br></br>
                <select 
          value={formData.month_claimed}
          onChange={handleInputChange} name="month_claimed">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
              </div>



              <div className="div6">
                <label htmlFor="textInput">Week of Month Claimed: </label>
                <br></br>
                <input type="number" id="textInput" name="week_of_month_claimed"
          value={formData.week_of_month_claimed}
          onChange={handleInputChange} max={4} required />
              </div>


              <div className="div7">
                <label htmlFor="textInput">Day of Week Claimed: </label>
                <br></br>
                <select 
          value={formData.day_of_week_claimed}
          onChange={handleInputChange} name="day_of_week_claimed">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
              </div>
              </div> 
            </div>

            <div className="claim-details">
              <h3>Claim Details:</h3>
              <div className="grid-container">
              <div className="div11">
                <label htmlFor="textInput">Fault: </label>
                <br></br>
                <label>
          <input
            type="radio"
            name="fault"
            value="Policy Holder"
            checked={formData.fault === 'Policy Holder'}
            onChange={handleInputChange}
          />
          Policy Holder
        </label>
        <label>
          <input
            type="radio"
            name="fault"
            value="Third Party"
            checked={formData.fault === 'Third Party'}
            onChange={handleInputChange}
          />
          Third Party
        </label>
              </div>
              <div className="div17">
                <label htmlFor="textInput">Age of Vehicle: </label>
                <br></br>
                <select 
          value={formData.age_of_vehicle}
          onChange={handleInputChange} name="age_of_vehicle">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="new">1 years</option>
          <option value="2 years">2 years</option>
          <option value="3 years">3 years</option>
          <option value="4 years">4 years</option>
          <option value="5 years">5 years</option>
          <option value="6 years">6 years</option>
          <option value="7 years">7 years</option>
          <option value="more than 7">more than 7 years</option>
        </select>
              </div>
              <div className="div18">
                <label htmlFor="textInput">Police Report Filed: </label>
                <br></br>
                <label>
          <input
            type="radio"
            name="police_report_filed"
            value="Yes"
            checked={formData.police_report_filed === 'Yes'}
            onChange={handleInputChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="police_report_filed"
            value="No"
            checked={formData.police_report_filed === 'No'}
            onChange={handleInputChange}
          />
          No
        </label>


              </div>
              <div className="div19">
                <label htmlFor="textInput">Witness Present: </label>
                <br></br>
                <label>
          <input
            type="radio"
            name="witness_present"
            value="Yes"
            checked={formData.witness_present === 'Yes'}
            onChange={handleInputChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="witness_present"
            value="No"
            checked={formData.witness_present === 'No'}
            onChange={handleInputChange}
          />
          No
        </label>
              </div>


              <div className="div20">
                <label htmlFor="textInput">Number of Supplements: </label>
                <br></br>
                <select 
          value={formData.no_of_supplements}
          onChange={handleInputChange} name="no_of_supplements">
          <option value="" disabled selected hidden>Select an option</option>
          <option value="none">None</option>
          <option value="1 to 2">1 to 2</option>
          <option value="3 to 5">3 to 5</option>
          <option value="more than 5">more than 5</option>
        </select>
              </div>

              <div className="div21">
                <label htmlFor="textInput">Age of driver: </label>
                <br></br>
                <input type="number" id="textInput" name="age"
          value={formData.age}
          onChange={handleInputChange} required />
              </div>

              </div>     
            </div>
            <div class="form-group">
          <button type="submit">Submit</button>
        </div>
          </form>
          <div>
          <label>(** - Please input as given during registration)</label>
        </div> 
        </div>
        {status}
        
        
      </div>
        
      </>
    );
  }


export default ClaimData;
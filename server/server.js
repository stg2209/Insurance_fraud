const express= require('express')
const app=express()
const mongoose = require("mongoose")
var bodyParser = require('body-parser');
const axios = require("axios");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const nodemailer = require('nodemailer');

const {month,day_of_week,accident_area,day_of_week_claimed,month_claimed,sex,marital_status,fault,policy_type,vehicle_category,vehicle_price,past_no_claims,age_of_vehicle,police_report_filed,witness_present,no_of_supplements,address_change_claims,base_policy } = require("S:/Code/MERN/insurance_fraud/frontend/src/components/Dictionaries");


mongoose
.connect('mongodb://127.0.0.1:27017/Insurance_fraud')
.then(()=> console.log("Mongo connected"))
.catch((err)=> console.log("Mongo not connected"));

const admin = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('admin', admin);


const customer = new mongoose.Schema({
    policy_number: {
        type: String,
        required: true,
        unique:true,
    },
    policy_holder_name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    marital_status: {
        type: String,
        required: true
    },
    policy_type: {
        type: String,
        required: true
    },
    vehicle_category: {
        type: String,
        required: true
    },
    vehicle_price: {
        type: String,
        required: true
    },
    deductible: {
        type: Number,
        required: true
    },
    past_no_claims: {
        type: String,
        required: true
    },
    address_change_claims: {
        type: String,
        required: true
    },
    base_policy: {
        type: String,
        required: true
    },
    policy_holder_email:{
        type:String,
        required:true
    }
});

const Customer = mongoose.model('customer', customer);

const claim = new mongoose.Schema({
    policy_number: {
        type: String,
        required: true,
        unique:true,
    },
    policy_holder_name: {
        type: String,
        required: true
    },
    policy_type: {
        type: String,
        required: true
    },
    vehicle_category: {
        type: String,
        required: true
    },
    vehicle_price: {
        type: String,
        required: true
    },
    deductible: {
        type: Number,
        required: true
    },
    past_no_claims: {
        type: String,
        required: true
    },
    address_change_claims: {
        type: String,
        required: true
    },
    base_policy: {
        type: String,
        required: true
    },
    fraudulent:{
        type: String,
        required: true
    }
});

const Claim = mongoose.model('claim', claim);




app.get("/api",(req,res)=>{
    res.json({"dev":"soham"})
})

app.post('/claim', async (req, res) => {

    function fraud(){
        axios.post("http://127.0.0.1:5000/predict", { data })
        .then((res) => {
            return (res['data']['prediction'][0]);// Save the response
    // You can perform additional actions here if needed
        })
        .catch((err) => {return err});
    }
    try {
        const customer= await Customer.findOne({['policy_number']:req.body.formData.policy_number})

        if(!customer){
            return res.status(401).json({ message: "No such policy/customer exists" });
        }
        if(customer['policy_holder_name']!=req.body.formData.policy_holder_name){
            return res.status(401).json({ message: "No such policy/customer exists" });
        }
        let data = [           
            month[req.body.formData.month],
            parseInt(req.body.formData.week_of_month, 10),
            day_of_week[req.body.formData.day_of_week],
            accident_area[req.body.formData.accident_area],
            day_of_week_claimed[req.body.formData.day_of_week_claimed],
            month_claimed[req.body.formData.month_claimed],
            parseInt(req.body.formData.week_of_month_claimed,10),
            sex[customer['sex']],
            marital_status[customer['marital_status']],
            parseInt(req.body.formData.age,10),
            fault[req.body.formData.fault],
            policy_type[customer['policy_type']],
            vehicle_category[customer['vehicle_category']],
            vehicle_price[customer['vehicle_price']],
            customer['deductible'],
            past_no_claims[customer['past_no_claims']],
            age_of_vehicle[req.body.formData.age_of_vehicle],
            police_report_filed[req.body.formData.police_report_filed],
            witness_present[req.body.formData.witness_present],
            no_of_supplements[req.body.formData.no_of_supplements],
            address_change_claims[customer['address_change_claims']],
            base_policy[customer['base_policy']]
        ]

        async function fraud() {
            try {
                const res = await axios.post("http://127.0.0.1:5000/predict", { data });
                return res['data']['prediction'][0];
            } catch (err) {
                console.error(err);
                throw err; // Rethrow the error to be caught in the outer try-catch block
            }
        }
        let fraud_p;
        try {
            fraud_p = await fraud();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error fetching prediction' });
        }
        console.log(fraud_p)
        
        const add_claim= new Claim({
            policy_number:req.body.formData.policy_number,
            policy_holder_name :customer['policy_holder_name'],
            policy_type: customer['policy_type'],
            vehicle_category:customer['vehicle_category'],
            vehicle_price: customer['vehicle_price'],
            deductible:customer['deductible'],
            past_no_claims: customer['past_no_claims'],
            address_change_claims: customer['address_change_claims'],
            base_policy: customer['base_policy'],
            fraudulent: fraud_p

        });
        await add_claim.save();
        
        res.json({ message: 'Claim has started to process' });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
	
});

app.get('/get_claims', (req, res) => {
    Claim.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post('/add_customer',async (req,res)=>{
    //policy_number=req.body['policy_number']
    //console.log(policy_number)
    
    

    try{
        const add_customer= new Customer({
            policy_number:req.body['policy_number'],
            policy_holder_name :req.body['cust_data']['policy_holder_name'],
            sex: req.body['cust_data']['sex'],
            marital_status: req.body['cust_data']['marital_status'],
            policy_type: req.body['cust_data']['policy_type'],
            vehicle_category:req.body['cust_data']['vehicle_category'],
            vehicle_price: req.body['cust_data']['vehicle_price'],
            deductible:req.body['cust_data']['deductible'],
            past_no_claims: req.body['past_no_claims'],
            address_change_claims: req.body['address_change_claims'],
            base_policy: req.body['cust_data']['base_policy'],
            policy_holder_email:req.body['cust_data']['policy_holder_email'],

        });
        await add_customer.save();
        const policy_holder_email= req.body['cust_data']['policy_holder_email']
        const policy_holder_name= req.body['cust_data']['policy_holder_name']
        const policy_type= req.body['cust_data']['policy_type']
        const policy_number= req.body['policy_number']

        const response = await fetch('http://localhost:5001/send_email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You can pass any additional headers as needed
            },
            body: JSON.stringify({ policy_holder_email,policy_number, policy_holder_name, policy_type
            }),
        });

        console.log(response.message)

        res.json({ message: 'Customer added successfully' });
    }
    catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/send_email', async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "2021.soham.phalke@ves.ac.in", // Your email address
            pass: process.env.mail_pass // Your email password or app-specific password
        }
    });
    
    // Email content
    const mailOptions = {
        from: 'Insurance company', // Sender email address
        to: req.body.policy_holder_email, // Recipient email address
        subject: 'You have been registered to our Family', // Subject line
        text: `This is a email has been sent to you to inform about successful insurance registration with: Policy Number:${req.body.policy_number}, Policy holder name:${req.body.policy_holder_name}, Policy Type:${req.body.policy_type} `
           
    };
    
    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error occurred:', error);
        } else {
            res.json({ message: 'Email sent' });
        }
    });
})

app.post('/admin_login', async (req,res)=>{
    
        const username= req.body.username;
        const password = req.body.password;
        try {
            const admin_find = await Admin.findOne({username:username});

            if (!admin_find) {
                
                return res.status(401).json({ message: "IInvalid username or password" });
              }
          
              // Compare the password directly
              if (admin_find.password !== password) {
                console.log("password not matched")
                return res.status(401).json({ message: "Invalid username or password" });
              }
          
              // Authentication successful
              return res.status(200).json({ message: "Login successful" });


        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({ message: "Internal server error" });
          }


    
})


app.listen(5001,()=>{console.log("Server has started on 5001")})
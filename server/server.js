const express= require('express')
const app=express()
const mongoose = require("mongoose")
var bodyParser = require('body-parser');
const axios = require("axios");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
});

const Customer = mongoose.model('customer', customer);




app.get("/api",(req,res)=>{
    res.json({"dev":"soham"})
})

app.post('/testing', async (req, res) => {
    try {
        let data = [            
           req.body.data.field1,
            req.body.data.field2,
            req.body.data.field3,
            req.body.data.field4,
            req.body.data.field5,
            req.body.data.field6,
            req.body.data.field7,
            req.body.data.field8,
            req.body.data.field9,
            req.body.data.field10,
            req.body.data.field11,
            req.body.data.field12,
            req.body.data.field13,
            req.body.data.field14,
            req.body.data.field15,
            req.body.data.field16,
            req.body.data.field17,
            req.body.data.field18,
            req.body.data.field19,
            req.body.data.field20,
            req.body.data.field21,
            req.body.data.field22]
        axios
	    .post("http://127.0.0.1:5000/predict",{ data })
	// Show response data
	    .then((res) => console.log(res['data']['prediction'][0]))
	    .catch((err) => console.log(err));
        //await newTest.save();
        

        // Respond with success message
        
        res.json({ message: 'User created successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
	
});

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

        });
        await add_customer.save();

        res.json({ message: 'Customer added successfully' });
    }
    catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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
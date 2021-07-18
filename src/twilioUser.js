require('dotenv').config()
const fs = require('fs');


//calling values from .env file - for security/privacy purposes

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 


const express = require('express');
const http = require('http');

const app = express();

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { default: userEvent } = require('@testing-library/user-event');

var response = '';


app.use(express.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    // console.log(req.body.From);
    
    // convert JSON object to string
    const data = JSON.stringify(req.body.From);
    const userData = (req.body.Body);
    const formatData = '[' + data + ']'

    let users = require('./user.json');
  
    
   
      function findUser(number) {
        for (var index in users) {
            if (users[index] == number) {
                return users[index]; //user exists in system
            }
        }
        return null;
    }
       
    var user = findUser(data);
    if (user == null) {
      response = '<Response><Message>Welcome to EDIA ' + userData + ', are you ready to answer our questions?</Message></Response>';
      users.push(data);
      console.log(users);
    } else {
      response = '<Response><Message>Okay, here is the question: </Message></Response>';
    }

    res.setHeader('Content-Type', 'text/xml');
    res.send(response);

});

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
      response = '<Response><Message>Okay ' + userData + ', here is the question: </Message></Response>';
    }

    // if (formatData == users) {
    //   response = '<Response><Message>Okay' + userData + ', here is the question: </Message></Response>';


    // } else {
    //   fs.writeFile('user.json', formatData, { flag: 'a+'}, (err) => {
        
    //     var resData = JSON.parse(formatData);
    //     console.log(resData);
        
    //   if (err) {
    //       throw err;
    //   }
    
    //   });
    // response = '<Response><Message>Welcome to EDIA ' + userData + ', are you ready to answer our questions?</Message></Response>';
    // }

    res.setHeader('Content-Type', 'text/xml');
    res.send(response);

});



// app.get('/sms', (req, res) => {

//   //would req name from json file work?

//   fs.readFile('towardsUser.json', (err, towardsData) => {
//     if (err) {
//         throw err;
//     }
//     var towardsUser = JSON.parse(towardsData);
//     console.log(towardsUser);

//     client.messages.create({})

//      const askUser = {
//          body: 'You have recieved an automated message!',
//          from: '+61480093159',
//          to: '+61434190715',
//      };


  
//     res.setHeader('Content-Type', 'text/xml');
//     res.send(askUser);
//     console.log('check');

//   });

// });

app.listen(3500, () => {
  console.log('Express server listening on port 3500');
});


  



/*

app.post('/', (req, res) => {
    const twiml = new MessagingResponse();
  
    if (req.body.Body == 'hello') {
      twiml.message('Hi!');
    } else if (req.body.Body == 'bye') {
      twiml.message('Goodbye');
    } else {
      twiml.message(
        'No Body param match, Twilio sends this in the request to your server.'
      );
    }
  
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });





//const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log('App listening on http://localhost:5000'));

*/

     
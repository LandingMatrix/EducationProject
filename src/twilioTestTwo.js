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
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

let messages = [];
    client.messages.list({
        to: "+61480093159",
        
    })
    .then(userNum => messages = userNum)

console.log(messages[0]);

messages.forEach(userNum => {
    const num = userNum.from
    client.messages.create({

        from: "+61480093159",
        to: num,
 
        url: "https://handler.twilio.com/twiml/EH72a472ace7bb5161fc018ff43a41ffa8"
    })
})
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


// const data = JSON.stringify(messages);
//   // write JSON string to a file
//   fs.writeFile('user.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });



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

     
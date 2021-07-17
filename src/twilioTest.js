
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'HIII Thomass :)))',  
         messagingServiceSid: 'MG0d85bd1acab334cf22691b901a316e10',      
         to: '+61423456084' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();


const accountSid = 'AC687792804eaf16fea478a8fd0a9184b5'; 
const authToken = '8c7dea6574a818b0e2ba842f1a9dbd62'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'HIII Thomass :)))',  
         messagingServiceSid: 'MG0d85bd1acab334cf22691b901a316e10',      
         to: '+61423456084' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

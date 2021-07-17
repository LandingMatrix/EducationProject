const twilio = require('twilio');

//The SID and AuthToken are both test values right now - change to real values once the testing is finished
const accSid = 'AC687792804eaf16fea478a8fd0a9184b5';
const authToken = '6956f63407e7da3f75e71d6f7458f360';

const clientSide = new twilio(accSid, authToken);

let msg = [];

clientSide.messages.create({
    body: 'Hello',
    to: '+61434190715',
    from: '+61480093159'
})
.then(message => console.log(messages.sid))

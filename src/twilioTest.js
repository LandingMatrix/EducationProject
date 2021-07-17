const twilio = require('twilio');

//The SID and AuthToken are both test values right now - change to real values once the testing is finished
const accSid = 'AC432db3e2731619e2170599d330c88f28';
const authToken = '79a328ed4e7c6491203105c034f5ed1a';

const clientSide = new twilio(process.env.accSid, process.env.authToken);

let msg = [];

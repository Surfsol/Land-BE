const router = require("express").Router();
const twilio = require("twilio");

const accountSid = process.env.TWILIOID;
const authToken = process.env.AUTHTWILIO;
const client = new twilio(accountSid, authToken);


router.get("/", (req, res) => {

    res.send('Hello to Twilio')
    const { recipient, textmessage } = req.body;
    console.log(recipient)
    console.log(textmessage)
    
    //send text
    client.messages
      .create({
        body: textmessage,
        to: recipient,
        from: TWILIO_NO
      })
      .then(message => console.log(message.body));
  });

module.exports = router;

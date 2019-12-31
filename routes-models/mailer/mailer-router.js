const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const output = `
          <p>You have a new contact request</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>Name: ${req.body.your_name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
        `;
  //https://ethereal.email
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.EMAILFROM,
      pass: process.env.PASSWORDFROM
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: process.env.EMAILFROM,
    to: process.env.EMAILTO,
    subject: "respond mail",
    text: "text",
    html: output //variable from above
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error occured." + err.message);
      return process.exit(1);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(201).json({ sent: "message sent" });
  });
});

module.exports = router;

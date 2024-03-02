const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.port || 3000;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = {
    name: "A S Vijayavitthala",
    email: "asvijayavitthala@gmail.com",
    phone: "9481837702",
    message: "hello testing1",
  };

  const mailOptions = {
    from: email,
    to: "asvijayavitthala@gmail.com",
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response + mailOptions);
      res.send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

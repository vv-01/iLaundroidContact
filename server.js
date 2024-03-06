const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 3000;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express JS to post Data");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message, Rname, Remail, Rphone, Rmessage } =
    req.body;

  const mailOptions = {
    from: email,
    to: "engineeringunicorns69@gmail.com", //laundry mail id
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  const mailOptionsClients = {
    from: "ilaundroidmangalore@gmail.com",
    to: email,
    subject: `New message from ${Rname}`,
    text: `Name: ${Rname}\nEmail: ${Remail}\nPhone: ${Rphone}\nMessage: ${Rmessage}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    const infoClients = await transporter.sendMail(mailOptionsClients);
    console.log("Client Email sent: " + infoClients.response);

    res.send("Emails sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending emails");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

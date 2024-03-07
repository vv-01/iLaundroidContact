// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const app = express();
// const port = process.env.port || 3000;
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.user,
//     pass: process.env.pass,
//   },
// });

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Express JS to post Data");
// });

// app.get("/ping", (req, res) => {
//   res.send("pong 🏓");
// });

// app.post("/send-email", (req, res) => {
//   const { name, email, phone, message } = req.body;
//   console.log(res);

//   const mailOptions = {
//     from: email,
//     to: "asvijayavitthala@gmail.com",
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//   };

//   //   console.log(mailOptions);

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent: " + info.response + mailOptions);
//       res.send("Email sent successfully");
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const app = express();
// const port = process.env.PORT || 3000;
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS,
//   },
// });

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Express JS to post Data");
// });

// app.get("/ping", (req, res) => {
//   res.send("pong 🏓");
// });

// app.post("/send-email", async (req, res) => {
//   const { name, email, phone, message, Rname, Remail, Rphone, Rmessage } =
//     req.body;

//   const mailOptions = {
//     from: email,
//     to: "engineeringunicorns69@gmail.com", //laundry mail id
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//   };

//   const mailOptionsClients = {
//     from: "ilaundroidmangalore@gmail.com",
//     to: email,
//     subject: `New message from ${Rname}`,
//     text: `Name: ${Rname}\nEmail: ${Remail}\nPhone: ${Rphone}\nMessage: ${Rmessage}`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);

//     const infoClients = await transporter.sendMail(mailOptionsClients);
//     console.log("Client Email sent: " + infoClients.response);

//     res.send("Emails sent successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error sending emails");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express JS to post Data");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(res);

  const mailOptions1 = {
    from: email,
    to: process.env.user,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  const mailOptions2 = {
    from: email,
    to: email,
    subject: `New message from iLaundroid`,
    text: `Name: iLaundroid\nEmail: ilaundroidmangalore@gmail.com\nPhone: 9876543210\nMessage: We'll be in touch with you soon, typically within 2 business days.\nThank you for choosing iLaundroid.\nHave a wonderful day!`,
  };

  transporter.sendMail(mailOptions1, (error1, info1) => {
    if (error1) {
      console.error(error1);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email 1 sent: " + info1.response + mailOptions1);
      transporter.sendMail(mailOptions2, (error2, info2) => {
        if (error2) {
          console.error(error2);
          res.status(500).send("Error sending email");
        } else {
          console.log("Email 2 sent: " + info2.response + mailOptions2);
          res.send("Emails sent successfully");
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

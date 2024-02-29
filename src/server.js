const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
app.post("/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: name,
    to: "claireeberle@898gmail.com",
    subject: email,
    text: message,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

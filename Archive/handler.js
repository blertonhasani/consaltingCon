"use strict";
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "email-smtp.us-east-2.amazonaws.com",
  secure: true,
  port: 465,
  auth: {
    user: "AKIATOQBTRGSJ2LA6R6D",
    pass: "BEeypGWQ2IIXMrJWoMnmdeSXGXge3luGLwryiGYeHRzf",
  },
  maxMessages: Infinity,
  pool: true,
  maxConnections: 1,
  rateDelta: 1000,
  rateLimit: 5,
});


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const run = async (event) => {
  const first_name = event.first_name;
  const last_name = event.last_name
  const email = event.email;
  const phoneNumber = event.phone_no;
  const message = event.message;

  const errors = {};

  if (!first_name) { console.log("Full name is required"); }
  if (!last_name) { console.log("Lat neame is required"); }
  if (!email) {
    console.log("Email is required");
  } else if (!email.match(EMAIL_REGEX)) {
    console.log("Invalid email address");
  }

  if (!phoneNumber) { console.log("Phone Number is required"); }

  if (!message) { console.log("Message is required"); }

  if (Object.keys(errors).length > 0) {
    console.log(errors);
  }

  try {
    await transport
      .sendMail({
        from: "info@phantomglobal.co.uk", // Sender address
        to: "info@phantomglobal.co.uk", // List of receivers
        subject: "Phantomglobal", // Subject line
        text: "Phantomglobal.",
        html: `
            <p>${first_name} - ${last_name}</p>
            <p>${email}!<br />
            <p>${phoneNumber}!</p>
            <p>${message}</p>
								`,
      })
      .then((data) => {
        console.log("data", data);
      });
  } catch (e) {
    console.log("eeeeeeee", e);
  }
};



module.exports.run = run;

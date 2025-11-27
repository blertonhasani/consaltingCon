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
    const user_name = event.user_name;
    const email = event.email;
    const phoneNumber = event.phone_no;
    const message = event.message;

    console.log("logs", user_name, email, phoneNumber, message)

    const errors = {};

    if (!user_name) {
        throw Error("Full name is required");
        return;
    }
    if (!email) {
        throw Error("Email is required");
        return;
    } else if (!email.match(EMAIL_REGEX)) {
        throw Error("Invalid email address");
        return;
    }

    if (!phoneNumber) {
        throw Error("Phone Number is required");
        return;
    }

    if (!message) {
        throw Error("Message is required");
        return;
    }

    if (Object.keys(errors).length > 0) {
        throw Error("eeeeeeee", eeeeeeee)
    }

    try {
        await transport
            .sendMail({
                from: "blertihasani85@gmail.com", // Sender address
                to: "blertihasani85@gmail.com", // List of receivers
                subject: "Digital ButterFly", // Subject line
                text: "Digital ButterFly.",
                html: `
            <p>${user_name}</p>
            <p>${email}!<br />
            <p>${phoneNumber}!</p>
            <p>${message}</p>
								`,
            })
            .then((data) => {
                console.log("data", data);
            });
    } catch (e) {
        throw Error("eeeeeeee", e)
    }
};



module.exports.run = run;

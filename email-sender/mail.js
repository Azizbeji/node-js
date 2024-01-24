const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "azizbeji50@gmail.com",
    
  },
});

const mailOptions = {
  from: "azizbeji50@gmail.com",
  to: "azizbeji50@gmail.com",
  subject: "Test Email",
  text: "This is a test email sent using Node.js and Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

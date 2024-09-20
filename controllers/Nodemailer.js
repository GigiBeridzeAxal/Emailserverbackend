const express = require('express')




const sendmail = async(req,res) => {

    const {message, email , username} = req.body

    console.log(message,email,username)


const nodemailer = require("nodemailer");


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "beridzegigi19@gmail.com",
          pass: "cdcs xqtm mqsu qktj",
        },
        tls: {
            rejectUnauthorized: false, // Ignore self-signed certificate error
          },
      });

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"EmailServer" <maddison53@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: username, // Subject line
    text: message, // plain text body
    html: message, // html body
  });


  console.log("Message sent: %s", info.messageId);
  
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);


}
module.exports = {sendmail}

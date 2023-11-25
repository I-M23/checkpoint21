

const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 587,
    auth : {
        user : "EMAIL",
        pass : "Password",
    }
})

const mailOptions = {
    from :"",
    to : "",
    subject : "new email sended",
    text : "this is our first email try to send.",

}

transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err);
    }

    console.log("Email send with sucess" + info.response);
})
var nodemailer= require('nodemailer');
var transporteur= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joanisesdrasa@gmail.com',
        pass: 'jnsg sico vudo dsdg'
    }
});

var mail_options={
    from: 'joanisesdrasa@gmail.com',
    to: 'marcikhela@gmail.com',
    subject: 'send for node js ',
    text: 'c est fait'
};

transporteur.sendMail(mail_options, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:'+ info.response);
    }
});

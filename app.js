var express=require("express")
app=express()
var nodemailer=require("nodemailer")

app.use('/',express.static('public'));


/*var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'sidhaldar98@gmail.com',
        pass: 'h@ld@rsid98'
    }
});

const mailOptions = {
  from: 'sidhaldar98@gmail.com', // sender address
  to: 'subhadeepbiswas250@gmail.com,sidhaldar98@gmail.com', // list of receivers
  subject: 'Sent using nodemailer ;)', // Subject line
  html: '<strong>YO NIGGz..whats popping</strong>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});*/


app.listen(3000,function()
{
	console.log("we're up")
})

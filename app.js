var express=require("express")
app=express()
var nodemailer=require("nodemailer")

/*var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sidhaldar98@gmail.com',
    pass: 'h@ld@rsid98'
  }
});

var mailOptions = {
  from: 'sidhaldar98@gmail.com',
  to: 'subroto.haldar@rp-sg.in,subroto2006h@yahoo.co.in',
  subject: 'Sending Email using Node.js',
  text: 'Happy Annniversary!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

app.use('/',express.static('public'));
app.listen(3000,function()
{
	console.log("we're up")
})
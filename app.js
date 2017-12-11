var express=require("express")
app=express()
var nodemailer=require("nodemailer")

app.use('/',express.static('public'));


app.listen(3000,function()
{
	console.log("we're up")
})

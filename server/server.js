const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {mongoose} = require('./db/mongoose');
const {Message} = require('./models/message');
const path = require('path');
const port = process.env.PORT || 3001;//work with heroku enviorenment 

let app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));
console.log(__dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));// parse form data into an object for req.body

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static("."));// serve css file and all other static files



app.get('/', (req, res) => {

	res.send("hello world");
});

app.post('/', (req, res) => {

	let transporter = nodemailer.createTransport({
		service:'gmail',
		auth: {
			user: "lilei2004@gmail.com",
			pass: "btkzdgxwtopgaeio"
		}
	});
	let mailOptions = {
		from: 'lilei2004@gmail.com',
		to: 'lilei2004@gmail.com',
		subject: `from ${req.body.name} ${req.body.email}`,
		text: req.body.messageBody
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if(err)
		  console.log("error: ", err);
		else
		  console.log(info);
	});
	let message = new Message({
		name: req.body.name,
		email: req.body.email,
		messageBody: req.body.messageBody
	});
	//console.log(message);

	message.save().then((doc) => {
		console.log(doc);
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/../client/build/index.html'));
 });
 
app.listen(port, () => {
	console.log("server is up")
});
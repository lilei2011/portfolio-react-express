const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Message} = require('./models/message');

const port = process.env.PORT || 3001;//work with heroku enviorenment 

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));// parse form data into an object for req.body

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));// use jquery in client side

app.use('/js', express.static(__dirname + '/js/'));


app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static("."));// serve css file and all other static files



app.get('/', (req, res) => {

	res.render('index.html');
});

app.post('/', (req, res) => {


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


app.listen(port, () => {
	console.log("server is up")
});
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;//work with heroku enviorenment 

let app = express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static("."));// server css file and all other static files








app.get('/', (req, res) => {

	res.render('index.html');
});


app.listen(port, () => {
	console.log("server is up")
});
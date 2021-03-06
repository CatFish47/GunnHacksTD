/* The express module is used to look at the address of the request and send it to the correct function */
var express = require('express');

var bodyParser = require('body-parser');

/* The http module is used to listen for requests from a web browser */
var http = require('http');

/* The path module is used to transform relative paths to absolute paths */
var path = require('path');

var mongoose = require('mongoose');

var dbAddress = process.env.MONGODB_URI || 'mongodb://127.0.0.1/spacecrash';

/* Creates an express application */
var app = express();

/* Creates the web server */
var server = http.createServer(app);

/* Defines what port to use to listen to web requests */
var port =  process.env.PORT
						? parseInt(process.env.PORT):
						2189;

function startServer() {

	app.use(bodyParser.json({ limit: '16mb' }));
	app.use(express.static(path.join(__dirname, 'public')));

	app.get('/', (req, res, next) => {
		var filePath = path.join(__dirname, './index.html');

		res.sendFile(filePath);
	})

	app.post('/', (req, res, next) => {
		console.log(req.body);
		res.send('OK');
	})

	app.get('/board.js', (req, res, next) => {
		var filePath = path.join(__dirname, './board.js');
		res.sendFile(filePath);
	})

	app.get('/eventListeners.js', (req, res, next) => {
		var filePath = path.join(__dirname, './eventListeners.js');
		res.sendFile(filePath);
	})

	app.get('/testClass.js', (req, res, next) => {
		var filePath = path.join(__dirname, './testClass.js');
		res.sendFile(filePath);
	})

	app.get('/testFunction.js', (req, res, next) => {
		var filePath = path.join(__dirname, './testFunction.js');
		res.sendFile(filePath);
	})

	app.get('/testFile.js', (req, res, next) => {
		var filePath = path.join(__dirname, './testFile.js');
		res.sendFile(filePath);
	})

	app.get('/game', (req, res, next) => {
		var filePath = path.join(__dirname, './game.html');
		res.sendFile(filePath);
	})

	app.get('/game.js', (req, res, next) => {
		var filePath = path.join(__dirname, './game.js');
		res.sendFile(filePath);
	})

	app.get('/board.js', (req, res, next) => {
		var filePath = path.join(__dirname, './board.js');
		res.sendFile(filePath);
	})

	app.get('/enemies.js', (req, res, next) => {
		var filePath = path.join(__dirname, './enemies.js');
		res.sendFile(filePath);
	})

	app.get('/init.js', (req, res, next) => {
		var filePath = path.join(__dirname, './init.js');
		res.sendFile(filePath);
	})

	app.get('/index.js', (req, res, next) => {
		var filePath = path.join(__dirname, './index.js');
		res.sendFile(filePath);
	})
	app.get('/units.js', (req, res, next) => {
		var filePath = path.join(__dirname, './units.js');
		res.sendFile(filePath);
	})
	app.get('/player.js', (req, res, next) => {
		var filePath = path.join(__dirname, './player.js');
		res.sendFile(filePath);
	})
	app.get('/funcs.js', (req, res, next) => {
		var filePath = path.join(__dirname, './funcs.js');
		res.sendFile(filePath);
	})

	// Images

	app.get('/images/background.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/background.png');
		res.sendFile(filePath);
	})
	app.get('/images/grid.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/grid.png');
		res.sendFile(filePath);
	})
	app.get('/images/gridBorder.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/gridBorder.png');
		res.sendFile(filePath);
	})
	app.get('/images/icon.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/icon.png');
		res.sendFile(filePath);
	})
	app.get('/images/MediumMan.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/MediumMan.png');
		res.sendFile(filePath);
	})
	app.get('/images/Rifle.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Rifle.png');
		res.sendFile(filePath);
	})
	app.get('/images/RifleShooting.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/RifleShooting.png');
		res.sendFile(filePath);
	})
	app.get('/images/SmallMan.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/SmallMan.png');
		res.sendFile(filePath);
	})
	app.get('/images/watermelon.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/watermelon.png');
		res.sendFile(filePath);
	})
	app.get('/images/box.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/box.png');
		res.sendFile(filePath);
	})
	app.get('/images/tileBorder.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/tileBorder.png');
		res.sendFile(filePath);
	})
	app.get('/images/empty.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/empty.png');
		res.sendFile(filePath);
	})
	app.get('/images/box.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/box.png');
		res.sendFile(filePath);
	})
	app.get('/images/FireIn.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/FireIn.png');
		res.sendFile(filePath);
	})
	app.get('/images/FireOut.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/FireOut.png');
		res.sendFile(filePath);
	})
	app.get('/images/Freeze.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Freeze.png');
		res.sendFile(filePath);
	})
	app.get('/images/Gunner.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Gunner.png');
		res.sendFile(filePath);
	})
	app.get('/images/empty.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/empty.png');
		res.sendFile(filePath);
	})
	app.get('/images/GunnerShooting.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/GunnerShooting.png');
		res.sendFile(filePath);
	})
	app.get('/images/Litning.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Litning.png');
		res.sendFile(filePath);
	})
	app.get('/images/Wisard.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Wisard.png');
		res.sendFile(filePath);
	})
	app.get('/images/SELF.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/SELF.png');
		res.sendFile(filePath);
	})
	app.get('/images/WALl.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/WALl.png');
		res.sendFile(filePath);
	})
	app.get('/images/Tank.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Tank.png');
		res.sendFile(filePath);
	})
	app.get('/images/AmmoredTank.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/AmmoredTank.png');
		res.sendFile(filePath);
	})
	app.get('/images/rabblir.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/rabblir.png');
		res.sendFile(filePath);
	})
	app.get('/images/Spin.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/Spin.png');
		res.sendFile(filePath);
	})
	app.get('/images/RatKing.png', (req, res, next) => {
		var filePath = path.join(__dirname, './images/RatKing.png');
		res.sendFile(filePath);
	})



	/* Defines what function to all when the server recieves any request from http://localhost:8080 */
	server.on('listening', () => {

		/* Determining what the server is listening for */
		var addr = server.address()
			, bind = typeof addr === 'string'
				? 'pipe ' + addr
				: 'port ' + addr.port
		;

		/* Outputs to the console that the webserver is ready to start listenting to requests */
		console.log('Listening on ' + bind);
	});

	/* Tells the server to start listening to requests from defined port */
	server.listen(port);

}

mongoose.connect(dbAddress, startServer);

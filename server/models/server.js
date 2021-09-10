const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		//http server
		this.server = http.createServer(this.app);

		//Sockets config
		this.io = socketio(this.server, {
			/* socket configurations */
		});
	}

	middlewares() {
		this.app.use(express.static(path.resolve(__dirname + '/../public')));

		this.app.use(cors());
	}

	configSockets() {
		new Sockets(this.io);
	}

	execute() {
		//Init middlewares
		this.middlewares();
		//Init Sockets
		this.configSockets();
		//Init server
		this.server.listen(this.port, () =>
			console.log('server up in port: ', this.port)
		);
	}
}

module.exports = Server;

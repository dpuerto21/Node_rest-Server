const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		// middlewares
		this.middlewares();
		this.routes();
	}

	middlewares() {
		// directorio Publico
		this.app.use(express.static('public'));
		// Cors
		this.app.use(cors());
		// parseo y lectura del body
		this.app.use(express.json());
	}

	routes() {
		this.app.use('/api/users', require('../routes/user'));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log('servidor corriendo en el puerto', this.port);
		});
	}
}

module.exports = Server;

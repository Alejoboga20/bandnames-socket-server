const BandList = require('./band-list');

class Sockets {
	constructor(io) {
		this.io = io;
		this.bandList = new BandList();
		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {
			console.log('client connected');

			socket.emit('current-bands', this.bandList.getBands());

			socket.on('vote-band', (id) => {
				this.bandList.increaseVotes(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('delete-band', (id) => {
				this.bandList.removeBand(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});
		});
	}
}

module.exports = Sockets;

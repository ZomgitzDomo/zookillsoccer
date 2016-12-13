import Dynamic from './Dynamic.js';

export default class Player extends Dynamic {
	
	constructor( name, top, left, trump ) {

		console.log('in Player Object name:' + name);
		super( name );

		this.trump = trump;

		this.dom = document.getElementById('player');

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

		document.addEventListener('keydown', event => this.slew(event), false);

		document.addEventListener('keyup', event => this.unkick(event), false);

		this.checkForTrump();

		this.show();


	}

	slew(event) {

		let currentX = parseInt(this.dom.style.left);
		let currentY = parseInt(this.dom.style.top);

		switch(event.keyCode) {

			case 37: //left arrow
				currentX -= 4;
				this.setPosition(currentY, currentX);
				break;

			case 39: //right arrow
				currentX += 4;
				this.setPosition(currentY, currentX);
				break;

			case 32: //space bar
					if(currentY < 496) return;
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;
		}
	}

	unkick(event) {

		let currentX = parseInt(this.dom.style.left);
		let currentY = parseInt(this.dom.style.top);

		switch(event.keyCode) {
				case 32: //space bar
				currentY += 4;
				this.setPosition(currentY, currentX);
				break;

		}
	}

	checkForTrump(top, left) {
		let trumpCurrentX = parseInt(this.trump.dom.style.left);
		let trumpCurrentY = parseInt(this.trump.dom.style.top);

		if (trumpCurrentY > (590 + 50) && trumpCurrentX > left && trumpCurrentX < left + 50) {

			trump.initPingPong();
		}

	}
}
import Dynamic from './Dynamic.js';

export default class Trump extends Dynamic {
	
	constructor( name, top, left ) {

		console.log('in Trump Object name:' + name);

		super( name );

		this.dom = document.getElementById('trump');

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

		this.initPingPong();

		this.show();
	}

	initPingPong (isInit) {

		isInit = true;

		if(isInit == true){

			console.log(" in pingpong");

		}
		




	}

	startPingPong () {

		console.log(" in startPingPong");

	}
}
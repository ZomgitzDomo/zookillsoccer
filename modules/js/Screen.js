import gameObj from './gameObj.js';
export default class Screen extends gameObj {
	
	constructor ( name ) {

		console.log('in screen');

		super( name );
	}//end of constructor

	getStartButton() {

		this.startButton = this.dom.getElementsByClassName( 'game-start' )[0];

		

	}

	getExitButton() {

		this.exitButton = this.dom.getElementsByClassName( 'game-exit' )[0];

	}

	

}//end of class
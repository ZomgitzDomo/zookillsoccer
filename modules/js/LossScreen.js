import Screen from './Screen.js';

export default class LossScreen extends Screen {

	constructor ( name ) {

		console.log('in LossScreen');
		super( name );

		this.dom = document.getElementById( 'loss-screen' );

		this.getStartButton();

		this.getExitButton();

	} // end of constructor
	

}// end of class
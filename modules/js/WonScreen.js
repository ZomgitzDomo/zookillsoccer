import Screen from './Screen.js';

export default class WonScreen extends Screen {

	constructor ( name ) {

		console.log('in WonScreen');
		super( name );

		this.dom = document.getElementById( 'won-screen' );

		this.setBackgroundImage( 'img/screens/won-screen.png' );

		this.getStartButton();

		this.getExitButton();

	} // end of constructor
	

}// end of class
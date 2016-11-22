import Screen from './Screen.js';

export default class StartScreen extends Screen {

	constructor ( name ) {

		super( name );
		console.log('in StartScreen');

		this.dom = document.getElementById( 'start-screen' );

	} // end of constructor
	

}// end of class
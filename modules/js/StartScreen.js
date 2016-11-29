import Screen from './Screen.js';

export default class StartScreen extends Screen {

	constructor ( name ) {

		super( name );
		console.log('in StartScreen');

		this.dom = document.getElementById( 'start-screen' );

		this.getStartButton();

		this.startButton.addEventListener('click', function() {
			alert('I am in screen:' + this.name );

			window.gameScreens[ 'start' ].hide(); //hide myself

			window.gameScreens[ 'game' ].show();//show self

		});

		this.getExitButton();

	} // end of constructor


	

}// end of class
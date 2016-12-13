import Screen from './Screen.js';

export default class StartScreen extends Screen {

	constructor ( name ) {

		super( name );
		console.log('in StartScreen');

		this.dom = document.getElementById( 'start-screen' );

		//set the background image

		this.setBackgroundImage( 'img/screens/start-screen.png' );

		//search for a 'start' button in the this.dom HTML markup. Note: will fail if no button present!

		this.getStartButton();

		//wite up the Start button to load the GameScreen

		this.startButton.addEventListener('click', () => {
			//alert('I am in screen:' + this.name );

			window.gameScreens[ 'start' ].hide(); //hide myself

			window.gameScreens[ 'game' ].show();//show self

			window.gameScreens[ 'game' ].build(); //rebuild the game with all its obects

		});

		this.getExitButton();

	} // end of constructor


	

}// end of class
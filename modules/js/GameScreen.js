import Screen from './Screen.js';
import Zoo from './Zoo.js';
import Trump from './Trump.js';
import Player from './Player.js';

export default class GameScreen extends Screen {

	constructor ( name ) {

		console.log('in GameScreen');
		super( name );

		this.dom = document.getElementById( 'game-screen' );

		this.setBackgroundImage( 'img/screens/game-screen.png' );

	} // end of constructor
	
	build () {

		console.log( 'building the game....' ); 

		this.zoo = new Zoo( 'Funky Zoo' );
		this.zoo.build();

		this.dom.appendChild( this.zoo.dom );

		this.trump = new Trump( 'Donald Presidentia Trump' );

		this.player = new Player( 'myself' );
	}

}// end of class
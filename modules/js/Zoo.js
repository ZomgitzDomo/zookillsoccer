import Static from './Static.js';
import Cage from './Cage.js';
import Animal from './Animal.js';
export default class Zoo extends Static {
	
	constructor ( name ) {

		console.log('in Zoo');

		super( name );

		//grab a zoo
		this.dom = document.createElement( 'div' );


	}//end of constructor

	build() {

		console.log('in zoo build');

		this.cages = [];

		this.cages.push( new Cage( 'Cage #1','cage1' ) );
		this.cages.push( new Cage( 'Cage #2','cage2' ) );
		this.cages.push( new Cage( 'Cage #3', 'cage3' ) );
		this.cages.push( new Cage( 'Cage #4', 'cage4' ) );

		

		this.animals = [];

		this.animals.push( new Animal( 'Angy Lion', 'lion' ) );
		this.animals.push( new Animal( 'Raging Tiger', 'tiger' ) );
		this.animals.push( new Animal( 'Mauling Bear', 'bear' ) );
		this.animals.push( new Animal( 'Rampaging Gorilla', 'gorilla' ) );


	}


}//end of class
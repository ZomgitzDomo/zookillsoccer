import Static from './Static.js';
export default class Cage extends Static {
	
	constructor ( name ) {

		console.log('in Cage name:' + name );

		super( name );

		// grab a cage from the dom
		this.dom = document.createElement( 'div' );

		this.setBackgroundImage( 'img/areas/cage.png' );
	}//end of constructor


}//end of class
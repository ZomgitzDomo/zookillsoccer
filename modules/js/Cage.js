import Static from './Static.js';
export default class Cage extends Static {
	
	constructor ( name, screenId ) {

		console.log('in Cage name:' + name );

		super( name );

		// grab a cage from the dom
		
		this.dom = document.getElementById(screenId);

		this.show();

		
	}//end of constructor


}//end of class
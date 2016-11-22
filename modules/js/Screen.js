import gameObj from './gameObj.js';
export default class Screen extends gameObj {
	
	constructor ( name ) {

		console.log('in screen');

		super( name );
	}//end of constructor

	show () {

		this.dom.style.display = 'block';

	}

	hide () {

		this.dom.style.display = 'none';

	}

}//end of class
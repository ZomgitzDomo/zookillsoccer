import Dynamic from './Dynamic.js';

export default class Animal extends Dynamic {
	
	constructor( name ) {

		console.log('in Animal Object name:' + name);

		super( name );
	}
}
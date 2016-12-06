import Dynamic from './Dynamic.js';

export default class Trump extends Dynamic {
	
	constructor( name ) {

		console.log('in Trump Object name:' + name);

		super( name );
	}
}
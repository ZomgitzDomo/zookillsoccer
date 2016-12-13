//maste object.
import gameObj from './gameObj.js';

//screen objects
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import WonScreen from './WonScreen.js';
import LossScreen from './LossScreen.js';

//hud object
import HUD from './HUD.js';
import Score from './Score.js';

//static object
import Static from './Static.js';
import Zoo from './Zoo.js';
import Cage from './Cage.js';

//dynamic object
import Dynamic from './Dynamic.js';

console.log('loading game.');

//global storage of all screebs created
window.gameScreens = [];

window.startScreen = new StartScreen('ZooKill start');
window.gameScreens[ 'start' ] = window.startScreen;

window.gameScreen = new GameScreen('zookill Game');
window.gameScreens[ 'game' ] = window.gameScreen;

window.wonScreen = new WonScreen('zookill You won');
window.gameScreens[ 'won' ] = window.wonScreen;

window.lossScreen = new LossScreen('zookill You loss');
window.gameScreens[ 'loss' ] = window.lossScreen;

window.score = new Score('game score object');


//window.zoo = new Zoo('zoo object');
//window.cage = new Cage('cage object');


//start the game.....
window.startScreen.show();






//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');



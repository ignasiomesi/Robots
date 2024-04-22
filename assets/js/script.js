import { robots } from './robots.js'
import { renderCards , getRobotById , getRobotsBySeries } from './funciones.js'

const {series , id , name , avatar , weapon} = robots[0];

console.log(series);
console.log(id);
console.log(name);
console.log(weapon);
console.log(avatar);


console.log(getRobotById("019"));

console.log(getRobotsBySeries(3));

renderCards(robots, 'robotsRow');
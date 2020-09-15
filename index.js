import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final14 = fifaData.filter(function(game){
    return game.Year === 2014 && game.Stage === 'Final';
});
console.log(final14);

const scores = final14.map(function(game){
    return (`${game['Home Team Name']}, ${game['Home Team Goals']}, ${game['Away Team Name']}, ${game['Away Team Goals']}, ${game['Win conditions']}`);
});
console.log(scores);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(){
    const fin = fifaData.filter(function(finals){
    return finals.Stage === 'Final';
});
return fin
}
console.log(getFinals());

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
    
function getYears(callback) {
   const years = callback.map(function(game){
        return game.Year;
    });
   return years
}
console.log(getYears(getFinals()))


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const winners = callback.map(function(wins){
    return `${wins['Win conditions']}`;
})
    return winners;
};

console.log(getWinners(getFinals()));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbgetWinners,cbgetYears) {
    const year = cbgetYears.filter(function(date){
        return `${date.Year}`;
    });
    const country = cbgetWinners.filter(function(name){
        return `${name['Winning condition']}`;
    });
    return `In ${year}, ${country} won the world cup!`;
};
console.log(getWinnersByYear(getWinners(getFinals()),getYears(getFinals())))



/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {
    const homeGoal = fifaData.reduce(function(accumulator, score){
        return (accumulator + score['Home Team Goals']) / fifaData.length;
    },0);
    const awayGoal = fifaData.reduce(function(accumulator, score){
        return (accumulator + score['Away Team Goals']) / fifaData.length;
    },0);
    return `Home Goals ${homeGoal}. Away Goals ${awayGoal}.`;
};

console.log(getAverageGoals())


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file.*/
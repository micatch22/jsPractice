const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const daysPerYear = 365;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

const yearsAlive = 38;
const daysAlive = yearsAlive * daysPerYear;
console.log(`I've been alive for more than ${daysAlive} days!`);
const getSleepHours = day => 
	{
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') { 
    return 7;
  } else if (day === 'wednesday') {
    return 6; 
  } else if (day === 'thursday') {
    return 5; 
  } else if (day === 'friday') {
    return 4; 
  } else if (day === 'saturday') {
    return 24;
  } else if (day === 'sunday') {
    return 2;
  } else {
    return "Day Value Error"
  }
  
}
//Test From Here Up
// console.log(getSleepHours('WEDNESDAY'.toLowerCase()));

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

//Test getActual SleepHours Function
//console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => 
  idealHours * 7;

//Test getIdealSleepHours Function
//console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours(8);
  if (actualSleepHours === idealHours) {
    console.log(`You are getting the perfect amount of sleep (${actualSleepHours} hours)`); 
} else if (actualSleepHours < idealHours) {
  console.log(`You are not getting enough sleep (${actualSleepHours} hours), you are getting ${idealHours - actualSleepHours} less hours than you should.`);
} else if (actualSleepHours > idealHours) {
  console.log(`You are getting too much sleep (${actualSleepHours} hours), you are sleeping ${actualSleepHours - idealHours} more than you should.`);
} else {
  console.log(`Error`)
}
}
//Test entire funtion 
calculateSleepDebt();

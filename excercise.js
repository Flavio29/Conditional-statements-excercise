let studyTime = 'six'

switch (studyTime){
  case 'four':
    console.log("You got two hours before going to study.");
  break;
  case 'five':
    console.log("You got one hour before going to study.");
  break;
  case 'six':
    console.log("Study time, focus and turn off notifications.");
  break;
  case 'seven':
    console.log("You were supposed to study at six, you're overdue one hour");
  break;
  default:
  console.log("You didn't study today.");
  break;
}
// Using switch statement

studyTime = 'six' ? console.log('Time to study buddy!')
: consol.log('You can chill for a bit.')
// Using Ternary operator


if(studyTime) {
  console.log("Relajemonos!");
} else {
  console.log("Vamos a estudiar!") 
}
// Using normal if...else statements
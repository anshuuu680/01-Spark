
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = daysOfWeek[dayOfWeek];
const date = currentDate.toLocaleDateString('en-GB');



export {day,date};
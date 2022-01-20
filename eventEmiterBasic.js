// we getting the class
const Event = require('events');

// creating the instance
const event = new Event();


// first we need to listen for the event then only emiting

//lisenting for event
event.on('Jayesh',(name,age) => { //  receving the event and perfoming a callback function
    console.log(`My name is ${name} and I'm ${age} years old`);
})

event.on('Jayesh',() => { //  receving the event and perfoming a callback function
    console.log(`This is another event listener Jayesh!`);
})

// emitting an event
event.emit('Jayesh','Jayesh','20'); 
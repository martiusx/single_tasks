import inquirer from 'inquirer';
import { EventEmitter } from 'events';

const { prompt } = inquirer;

const activity = [
  'Give me date and time',
  'Tell me a joke',
  'Say a compliment',
  'That is all, thanks!',
];

const listOfCompliments = [
  "You're an awesome friend",
  "You're a smart cookie",
  'You are awesome!',
  'You are the most perfect you there is.',
  'You light up the room.',
  'You deserve a hug right now.',
  "On a scale from 1 to 10, you're an 11.",
  'That color is perfect on you.',
];

const listOfJokes = [
  'Why do birds fly to warmer climates in the winter? - It’s much easier than walking!',
  'How does the ocean say hello? - It waves.',
  'What do you call a fake noodle? - An im-pasta.',
  'Why can’t you trust atoms? - They make up everything.',
  'What did one plate whisper to the other plate? - Dinner is on me.',
  'What kind of tree fits in your hand? - A palm tree!',
];


const EVENT = {
  exit: 'EXIT',
  date: 'DATE',
  flatter:'FLATTER',
  joke:'JOKE'
}
const robotEmitter = new EventEmitter();


robotEmitter.on(EVENT.exit,()=>{
  console.log('Bye!');
  process.exit();
})

robotEmitter.on(EVENT.date,()=>{
  console.log(new Date())
})

robotEmitter.on(EVENT.flatter,()=>{
  const complement = listOfCompliments[Math.floor(Math.random() * listOfCompliments.length)];
  console.log(complement)
})

robotEmitter.on(EVENT.joke,()=>{
  const joke = listOfJokes[Math.floor(Math.random() * listOfJokes.length)];
  console.log(joke)
})



async function flow() {
  while (true) {
    const {selected} = await prompt([
      {
        type:'list',
        name:'selected',
        message:"What do you want to do?",
        choices: activity
      }
    ])
    
    switch (selected) {
      case activity[0]:
        robotEmitter.emit(EVENT.date);
        break
      case activity[1]:
        robotEmitter.emit(EVENT.joke);
        break
      case activity[2]:
        robotEmitter.emit(EVENT.flatter);
        break
      case activity[3]:
        robotEmitter.emit(EVENT.exit);
        break
    }
  }
}

flow();
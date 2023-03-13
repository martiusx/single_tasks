import inquirer from 'inquirer';
import { EventEmitter } from 'events';

import { quiz } from './questions.js';
const { prompt } = inquirer;

let correct = 0;
let wrong = 0;

const emitter = new EventEmitter();
emitter.on('correct',()=>{
  correct++;
})
emitter.on('wrong',()=>{
  wrong++;
})
emitter.on('completed',()=>{
  if(passed(correct,quiz)){
    console.log("passed!")
  }else{
    console.log("failed!")
  }
  
})


async function game(){
  console.log("Let the game begin!");
  for(let i=0;i<quiz.length;i++){
  const {selected:answer} = await prompt([
    {
      type:'list',
      name: 'selected',
      ...quiz[i].question
    }
  ])
  
  if(quiz[i].question.choices.indexOf(answer) === quiz[i].answer){
    emitter.emit('correct')
  }else{
    emitter.emit('wrong')
  }
  }
  emitter.emit('completed')
}

game();

function passed(correct,questions){
  return (correct/questions.length) * 100 >=75
}
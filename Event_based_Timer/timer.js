import {EventEmitter} from "events";

class Timer extends EventEmitter{
  elapsed = 0;
  started = false;
  paused = false;
  _setupInterval(){
    return setInterval(()=>{
      if(this.elapsed %2===0){
        this.emit('tick',this.elapsed)
      }else{
        this.emit('tock',this.elapsed)
      }
      
      ++this.elapsed
    },1000)
  }
  
  start(){
    if(!this.started){
      this.emit('start')
      this.started = true;
      this.intervalId = this._setupInterval()
    }
  }
  pause(){
    if(this.started && !this.paused){
      clearInterval(this.intervalId)
      this.paused = true;
      this.emit('pause')
    }
  }
  resume(){
  if(this.started&& this.paused){
    this.intervalId = this._setupInterval()
    this.paused = false
    this.emit('resume')
  }
  }
  stop(){
  if(this.started){
    clearInterval(this.intervalId)
    this.started = false;
    this.emit('stop')
    this.elapsed = 0;
  }
  }
}


const timer = new Timer();

timer.on('start',()=>{
  console.log("Timer started!")
})
timer.on('stop', ()=>{
  console.log("Timer stopped!")
})
timer.on('pause', ()=>{
  console.log("Timer paused!")
})
timer.on('resume', ()=>{
  console.log("Timer resumed!")
})

timer.on('tick',(number)=>{
  console.log('I say TICK',number)
})
timer.on('tock',(number)=>{
  console.log('I say TOCK',number)
})

timer.start();

setTimeout(()=>{
timer.pause()
},5000)
setTimeout(()=>{
timer.resume()

},8000)

setTimeout(()=>{
  timer.stop()
  
},12000)
import React,{useState} from "react";
import Form from "./Form.js"
import Button from "./Button.js";

function App(){
  const [time,setTime]=useState({ms:0,s:0,m:0,h:0})
  const [status,setStatus]=useState(0)
  const [inter,setInter]=useState()
  var upadateMs=time.ms
  var upadateS=time.s
  var upadateM=time.m
  var upadateH=time.h

const start=()=>{
  Timer()
 setInterval(Timer,10)
//  setStatus(1)

}
const Timer=()=>{
  if(upadateM===60){
    upadateH++
    upadateM=0
  }
  if(upadateS===60){
    upadateM++
    upadateS=0;
  }
  if(upadateMs===100){
    upadateS++
    upadateMs=0
  }
  upadateMs++
  return setTime({ms:upadateMs,s:upadateS,m:upadateM,h:upadateH})
}

  return(
    <div>
      <h3>Count Down</h3>
      <Form time={time}/>
      <Button start={start}/>
    </div>
  )
}

export default App;


//Button.js
function Button({start,status,clear,reset}){
  return(
      <div>
          
          {status ==0 && <button onClick={start}>Start</button>}
          {status ==1 &&
          <div>
          <button onClick={}>Clear</button>
          <button>Clear</button>
          </div>
          }
      </div>
  )
}
export default Button;


//Form.js
import React,{useState} from "react";

function Form({time}){
  const {ms,s,m,h}=time;

  return(
    <div>
        <span>
          {h >=10 ? h:"0"+h}
        </span>
        :
        <span>
          {m >=10 ? m:"0"+m}
        </span>
        :
        <span>
          {s >=10 ? s:"0"+s}
        </span>
        :
        <span>
          {ms >=10 ? ms:"0"+ms}
        </span>
    </div>
  )
}
export default Form;

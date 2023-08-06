import React,{useState} from 'react'
import { Button,Message,Form,TextArea,Label} from 'semantic-ui-react'
import "./Form3.css"
import Sound1 from "./Sound1.mp3"
export default function Form3() {
  const [value1,setval1]=useState(" ");
  const [value2,setval2]=useState(" ");
  const [value3,setval3]=useState(" ");
  const [header,setHead]=useState("Could you check something!");
  const [content,setCont]=useState("You are missing on an entry, Check it out!")
  const [f,setF]=useState("1");
  const Aud1=new Audio(Sound1);
  const name1="question1";
  const name2="question2";
  const name3="question3";
  function alter1(event){
     event.preventDefault();
     setval1(event.target.value);
     console.log(value1);
     if(value1===" "||value2===" "||value3===" "){
      setHead("Could you check something!")
      setCont("You are missing on an entry, Check it out!")
      setF("1")
     }
     else{
    
      setHead("Filled Succesfully")
      setCont("You can now submit")
      setF("0")
     }
  }
  function alter2(event){
    event.preventDefault();
    setval2(event.target.value);
    console.log(value2);
    if(value1===" "||value2===" "||value3===" "){
    
      setHead("Could you check something!")
      setCont("You are missing on an entry,Check it out!")
      setF("1")
     }
     else{
  
      setHead("Filled Succesfully")
      setCont("You can now submit")
      setF("0")
     }
 }
 function alter3(event){
  event.preventDefault();
  setval3(event.target.value);
  console.log(value3);
  if(value1===" "||value2===" "||value3===" "){
    setHead("Could you check something!")
    setCont("You are missing on an entry,Check it out!")
    setF("1")
   }
   else{
  
    setHead("Filled Succesfully")
    setCont("You can now submit")
    setF("0")
   }
}

async function submit1(event){
  event.preventDefault();
  let arr={question1:value1,
           question2:value2,
           
    };
    arr.question3=value3;
    let questions=Object.keys(arr);
    let values=Object.values(arr);
    for(let j=0;j<=2;j++){
      console.log(questions[j]+":"+values[j])
    }
  const response=await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(arr),
    headers:{
      'Content-Type':'application/json'
    }
  })
  console.log(response);
  const data=await response.json();
  console.log(data)
  Aud1.play();
  setHead("Submitted Succesfully")
  setCont("Done with this")
  setF("1")

  setval1(" ");
  setval2(" ");
  setval3(" ");
  arr={};
}

  return (
    <div className="formarea">
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column mb-3">
        <div className="p-2">'
        <Form id="for1">
         {/*<label id="l1"  as='a' color='orange' ribbon='right'><h5>Please Enter 1st question</h5></label>*/}
        <Label as='a' color='black' ribbon>
          Question 1
        </Label>
        <span><h4>Please Enter your 1st question here</h4></span>
        <TextArea id="t1" placeholder='Tell us more' value={value1} name="question 1" onChange={alter1}/ >
        <Label as='a' color='black' ribbon>
          Question 2
        </Label>
        <span><h4>Please Enter your 2nd question here</h4></span>
        
        <TextArea id="t2" placeholder='Tell us more' value={value2} name="question 2" onChange={alter2}/ >
        <Label as='a' color='black' ribbon>
        Question 3
        </Label>
      <span><h4>Please Enter your 3rd question here</h4></span>
        
        <TextArea id="t3" placeholder='Tell us more' value={value3} name="question 3" onChange={alter3}/>
        <Message
          header={header}
          content={content}
        />
        <Button color='black' disabled={f==="1"} onClick={submit1}>Submit your questions</Button>
        
      </Form>
      
       
        
    </div>
    
    </div>
    </div>
    </div>
  )
}

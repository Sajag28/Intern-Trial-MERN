const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const server=express();
server.use(cors());
server.use(bodyParser.json());
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/interndata');
  console.log("Connection established with database")
}
const demoSchema=new mongoose.Schema({
    question1:String,
    valueofques1:String,
    question2:String,
    valueofques2:String,
    question3:String,
    valueofques3:String
})
const Demo = mongoose.model('Questions', demoSchema);
server.post('/demo',async (req,res)=>{
    let demo=new Demo();
    demo.question1=req.body.question1;
    demo.valueofques1=req.body.value1;
    demo.question2=req.body.question2;
    demo.valueofques2=req.body.value2;
    demo.question3=req.body.question3;
    demo.valueofques3=req.body.value3;
    const doc=await demo.save();
    console.log(doc);
    console.log(req.body)
    res.json(req.body);
})

server.listen(8080,()=>{
    console.log('server started')
})
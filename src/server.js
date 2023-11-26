import express from "express";

const POST = 4000;

const app = express();
 
const handelHome = (req,res) => {
   return res.send("<h1>I sitll love you.</h1>")
}

const handleLogin = (req,res) =>{
    return res.send({message:"Login here."})
}
app.get("/",handelHome);
app.get("/login",handleLogin);

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${POST} 🚀`);

app.listen(POST, handleListening);
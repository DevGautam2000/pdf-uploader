const express = require('express');
const multer = require("multer")
const cors = require("cors")
const app =  express()

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + '/public'))

//Configuration for Multer
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
});

//Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
  });

app.get("/",(req,res)=>{
    res.json({message:"sever is running"})
})

app.post("/file", upload.single("File") ,(req,res)=>{
    console.log(req.file);
    res.json({message:"uploaded."})
})

app.listen(4000,()=>{
    console.log("server running")
})
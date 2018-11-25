const recognition=require('./routes/recognition');
const celebrity=require('./routes/celebrity');
const multer=require('multer');
const upload=multer();
const express=require('express');
const app=express();

app.use(express.json());
app.use(upload.single('image')); //browser로 부터 받은 form-data를 처리하는 middleware.
app.use('/recognition',recognition);
app.use('/celebrity',celebrity);



const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));
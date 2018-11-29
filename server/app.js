const recognition=require('./routes/recognition');
const ranking=require('./routes/ranking');
const detail=require('./routes/detail');

const multer=require('multer');
const upload=multer();

const express=require('express');
const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.single('image')); //browser로 부터 받은 form-data를 처리하는 middleware.

app.use('/recognition',recognition);
app.use('/ranking',ranking);
app.use('/detail',detail);



const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));
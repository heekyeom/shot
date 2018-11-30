const recognition=require('./routes/recognition');
const ranking=require('./routes/ranking');
const detail=require('./routes/detail');

const config=require('config');
const mongoose=require('mongoose');
const multer=require('multer');
const upload=multer();

const express=require('express');
const app=express();


mongoose.connect(config.DB.mongoURI, { useNewUrlParser: true })
    .then(() => console.log(`Connected to mongoDB`))
    .catch(error => console.error(error.message));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.single('image')); //browser로 부터 받은 form-data를 처리하는 middleware.

app.use('/recognition',recognition);  //완료
app.use('/ranking',ranking);  //완료
app.use('/detail',detail);  //완료


const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));
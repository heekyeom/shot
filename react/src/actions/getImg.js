import { requestRecognition } from './index';

window.onload=()=>{
    const bodyTag=document.querySelector('body');
    bodyTag.addEventListener('click',clickedTag);
}

const clickedTag=async (event)=>{
    const src=event.target.src;
    console.log(src);
    requestRecognition(src);
}
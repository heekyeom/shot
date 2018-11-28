// if(!window.localStorage.getItem("toggle-gun-shot")){
//   console.log('켜질때');
//   let alltags = document.querySelector("body");
//   alltags.addEventListener("click", alertTagName);
//   window.localStorage.setItem("toggle-gun-shot","turned-on");
// }else{
//   console.log('꺼질때');
//   window.localStorage.removeItem("toggle-gun-shot");
//   let alltags = document.querySelector("body");
//   alltags.removeEventListener("click", alertTagName);
// }

// function alertTagName(event){
//   alert(event.target.tagName);
// }

let alltags = document.querySelector("body");
alltags.addEventListener("click", event => {
  alert(event.target.tagName);
});
//토글 결국 실패, 나중에 tag에 class를 주는 식으로 토글 구현하면 될듯
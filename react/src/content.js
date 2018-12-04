/*global chrome*/

import React from "react";
import ReactDOM from "react-dom";
import Bullet from "./animation/Bullet";
import Weapon from "./animation/Weapon";
import "./content.css";

//load된 page에 script를 넣으면, sciprt는 무기와 관련된 태그를 page의 DOM에 삽입한다.
const weaponContainer = document.createElement("div");
(function setWeapon() {
  console.log("setweapon executed!");
  weaponContainer.className = "weapon-cursor-container";
  ReactDOM.render(<Weapon />, weaponContainer);
  document.body.appendChild(weaponContainer);
  document.onmousemove = animateWeapon;
  weaponContainer.style.display = "none";
})();

let toggle_on = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "toggle_shot") {
    if (toggle_on) {
      //켜졌을때 끄는거
      document.querySelector("*").style.cursor = ""; // 1. 마우스 커서를 보여주고
      weaponContainer.style.display = "none"; // 2. 무기를 화면상에서 없애고
      document.querySelectorAll(".bullet-container").forEach(e => {
        //3. bullet들을 지운다.
        e.remove();
      });
      document.onmousedown = null; // 4. 마우스 클릭 이벤트를 삭제한다.
      
      toggle_on = false;
    } else {
      //꺼졌을때 켜는거
      document.querySelector("*").style.cursor = "none"; // 1. 마우스 커서를 없애고
      weaponContainer.style.display = ""; // 2. 무기를 화면상에 보여주고
      document.onmousedown = animateBullet; // 3. 마우스 클릭시 bullet을 찍어주는 이벤트를 등록.
      
      toggle_on = true;
    }
  }
});

//bullet 생성 이벤트.
function animateBullet(event) {

  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          const result = JSON.parse(httpRequest.response);
          alert(result.faces[0].celebrity.value);
        } else {
          alert('이미지를 찾을 수 없거나 사진에 얼굴이 없나봐요');
        }
      } else if(httpRequest.readyState === 1) {
        alert('로딩중입니다!');
      }
    };
    httpRequest.open("POST", "https://sam-hap.herokuapp.com/recognition");
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    const imgJSON = JSON.stringify({ image: event.target.src });
    httpRequest.send(imgJSON);
  } else {
    alert("이미지 태그가 아니에요!");
  }

  const bulletMark = document.createElement("div");
  bulletMark.className = "bullet-container";
  ReactDOM.render(<Bullet />, bulletMark);
  document.body.appendChild(bulletMark);

  const imgWidth = bulletMark.clientWidth;
  const imgHeight = bulletMark.clientHeight;

  bulletMark.style.left = event.pageX - imgWidth / 2 + 1 + "px";
  bulletMark.style.top = event.pageY - imgHeight / 2 + 1 + "px";
}

// weapon 이동 이벤트.
function animateWeapon(event) {
  weaponContainer.style.left = event.pageX + 1 + "px";
  weaponContainer.style.top = event.pageY + 1 + "px";
}

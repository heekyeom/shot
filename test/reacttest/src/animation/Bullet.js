import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./bullet.css";

class Bullet extends Component {
  render() {
    return (
        <img
          src="/resource/weapon_mark/bullet1.png"
          className="bullet"
          style={{ width: "70px", height: "70px" }}
        />
    );
  }
}

function animateBullet(event){
  const app = document.createElement("div");
  app.className = "bullet-container";
  ReactDOM.render(<Bullet />, app);
  document.body.appendChild(app);

  const imgWidth = app.clientWidth;
  const imgHeight = app.clientHeight;
  app.style.left = event.clientX - imgWidth / 2 + "px";
  app.style.top = event.clientY - imgHeight / 2 + "px";

  setTimeout(() => {
    app.remove();
  }, 3000);
}

document.onmousedown=animateBullet;
"use strict";
const paragraph = document.querySelector(".loremuno");
const insertParagraph = "<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque fuga corporis, ipsam at placeat cupiditate dignissimos voluptate veritatis quibusdam aliquid molestias, quia omnis eius minima veniam rerum tempore unde!</p>";

paragraph.addEventListener(
  "mouseover",
  () => (paragraph.innerHTML += insertParagraph )
);

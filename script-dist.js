window.onload=function(){let e=[...document.getElementsByClassName("slider-button")],t=[...document.getElementsByClassName("slider-item")];for(let s=0;s<e.length;s++)e[s].addEventListener("click",(function(n){n.preventDefault(),e.forEach((e=>e.classList.remove("active"))),t.forEach((e=>e.classList.add("visually-hidden"))),t[s].classList.remove("visually-hidden"),this.classList.add("active")}));var s=document.querySelector("#header-button-services");s.onmouseout=function(e){document.getElementById("arrow").setAttribute("fill","#FFFFFF")},s.onmouseover=function(e){document.getElementById("arrow").setAttribute("fill","#19191B")}};
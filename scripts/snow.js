let flakeContainer=document.getElementById("flakeContainer");
let types=['&#10052', '&#10053', '&#10054']

const rand=(t)=>{
  return Math.floor(Math.random()*t);
}
const randFlake = () => {
  const top = rand(120);
  const left = rand(100);
  const dur = rand(10)+ 6;
  const opacity = rand(10)/10;
  const size = rand(10)+25;
  return `
  top: -${top}%;
  left: ${left}%;
  font-size: ${size}px;
  opacity: ${opacity};
  animation-duration: ${dur}s;
  `
}

const flakes=(num)=>{
  for(var i=num; i>0; i--){
    var snow=document.createElement("div");
    snow.className="snow";
    snow.style.cssText=randFlake();
    snow.innerHTML = types[rand(2)];
    flakeContainer.append(snow);
  }
}

window.addEventListener("load", ()=>{
  flakes(40);
})

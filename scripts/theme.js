let rot=0;
let themeBtn=document.getElementById("themeBtn")
let rotated=false;

function themeChanger(){
  if(rotated){
    rot-=90;
    themeBtn.style.transform=`rotate(${rot}deg)`;
    rotated=false;
  }else{
    rot+=90;
    themeBtn.style.transform=`rotate(${rot}deg)`;
    rotated=true;
  }
}

themeBtn.addEventListener('click',()=>{
  themeChanger()
});


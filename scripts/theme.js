let rot=0;
let themeBtn=document.getElementById("themeBtn")
let themeDiv=document.getElementById("themeDiv")
let themeSelector=document.getElementById("themes")

let rotated=false;

function changeTheme(themeName){
  document.documentElement.className=themeName;
  localStorage.setItem('theme', themeName);
}
function dropDown(toopen=true){
  if (toopen){
    themeDiv.style.top="12rem";
    themeDiv.style.left=10;
  }else{
    themeDiv.style.top="-50%";
    themeDiv.style.left=10;
  }
}

function themeChanger(){
  if(rotated){
    rot-=90;
    themeBtn.style.transform=`rotate(${rot}deg)`;
    rotated=false;
    dropDown(false);
    
  }else{
    rot+=90;
    themeBtn.style.transform=`rotate(${rot}deg)`;
    rotated=true;
    dropDown();
  }
}

themeBtn.addEventListener('click',()=>{
  themeChanger();
});

themeSelector.addEventListener('change',()=>{
  changeTheme(themeSelector.value);
})

window.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem('theme')||'catppuccin';
  changeTheme(saved);
  themeSelector.value=saved;

})

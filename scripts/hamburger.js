let rotHam=90;
let hamBtn=document.getElementById("hamBtn")
let hamburgerDiv=document.getElementById("hamburgerDiv")
let rotatedHam=false;

function dropDownHam(toopen=true){
    if (toopen){
      console.log("Dropping down");
      hamburgerDiv.style.top="100%";
      hamburgerDiv.style.left=0;
    }else{
      console.log("Pulling up");
      hamburgerDiv.style.top="-75vh";
      hamburgerDiv.style.left=0;
    }
}

function dropHam(){
  if(rotatedHam){
    rotHam-=90;
    hamBtn.style.transform=`rotate(${rotHam}deg)`;
    rotatedHam=false;
    dropDownHam(false);
    
  }else{
    rotHam+=90;
    hamBtn.style.transform=`rotate(${rotHam}deg)`;
    rotatedHam=true;
    dropDownHam();
  }
}

hamBtn.addEventListener('click',()=>{
  dropHam();
});


let ginger=document.getElementById('movingGinger');
let isPlaying=false;
let aud=new Audio("audio/jingle_bells.mp3");
let santaAud=new Audio("audio/santaLaugh.mp3");
let santaReq=false;

function fly(element) {
      flyAnim=element.animate(
        [
          { transform:'translateX(120vw)' },
          { transform: "translateX(-100vw)" },
        ],
        {
          duration: 10000, 
          iterations:1 
        }
      );
    }


function flySmall(element) {
      flyAnim=element.animate(
        [
          { transform:'translateX(200vw)' },
          { transform: "translateX(-100vw)" },
        ],
        {
          duration: 4000, 
          iterations:1 
        }
      );
    }

function moveSanta(){
  let santa=document.getElementById("movingSanta");
  if (!santaReq){
    const delayedFly=setTimeout(()=>{
      if (isPlaying){
        if (window.screen.width>=768){
        fly(santa);
        const laugh=setTimeout(santaAud.play(),2000);
        }else{
        flySmall(santa);
        const laugh=setTimeout(santaAud.play(),1000);
        }
      }
      santaReq=false;
    },10500);
    santaReq=true;
  }
}
function moveGinger(){
  console.log("ran");
  ginger.style.transform="translateY(-10rem)";
  let getBack=setTimeout(()=>{
    ginger.style.transform="translateY(0)";
  },15000)
  console.log("done...");

}
function Jingle(){
  if(!isPlaying){
    aud.play();
    isPlaying=true;
    if(ginger){
      moveGinger();
    }
    moveSanta();
  }else{
    aud.pause();
    isPlaying=false;
  }
}



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

function moveSanta(){
  let santa=document.getElementById("movingSanta");
  if (!santaReq){
    const delayedFly=setTimeout(()=>{
      if (isPlaying){
        fly(santa);
        const laugh=setTimeout(santaAud.play(),2000);
      }
      santaReq=false;
    },10500);
    santaReq=true;
  }
}
function Jingle(){
  if(!isPlaying){
    aud.play();
    isPlaying=true;
    moveSanta();
  }else{
    aud.pause();
    isPlaying=false;
  }
}
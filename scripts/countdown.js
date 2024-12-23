hr=document.getElementById("hours")
mins=document.getElementById("mins")
secs=document.getElementById("secs")

let fadeAnim;
function fade(element) {
      fadeAnim=element.animate(
        [
          { opacity: 0.2 },
          { opacity: 1 },
          { opacity: 0.2 },
        ],
        {
          duration: 1000, // Total duration
          iterations: Infinity // Repeat indefinitely
        }
      );
    }

const christmas= new Date(new Date().getFullYear(),11,25);

const today=new Date();
const date=today.getDate();
const month=today.getMonth()+1;

if (date==25 && month==12){
  let showed=localStorage.getItem('wished')||false;
  if (showed){
    showWish();
    localStorage.setItem('wished', true);
    let something=document.getElementById('first');
    let randT=document.getElementById('randomJoke');
    something.innerHTML="Merry Christmas! Sing carrols and celebrate! Jingle Jingle!"
    randT.innerHTML="The wait is over! santa is here!"
  }
}else{
  let hrPrev=hr.innerHTML;
  let minPrev=mins.innerHTML;
  let secPrev=secs.innerHTML;

  const timer= setInterval(()=>{
    const now=new Date();
    const timeDiff=(christmas-now)/1000;
    hr.innerHTML=String(Math.floor(timeDiff/(60*60))).padStart(2,'0');
    mins.innerHTML=String(Math.floor((timeDiff-parseInt(hr.innerHTML,10)*60*60)/60)).padStart(2,'0');
    secs.innerHTML=String(Math.floor((timeDiff-(parseInt(hr.innerHTML,10)*60*60)-(parseInt(mins.innerHTML,10)*60)))).padStart(2,'0');

    if(hrPrev!=hr.innerHTML){
      fade(hr);
      hrPrev=hr.innerHTML;
    }else{
      let anims=hr.getAnimations();
      anims.forEach(anim=>{
          anim.cancel()
      })
    }
    if(minPrev!=mins.innerHTML){
      fade(mins);
      minPrev=mins.innerHTML;
    }else{
      let anims=mins.getAnimations();
      anims.forEach(anim=>{
          anim.cancel()
      })
    }
    if(secPrev!=secs.innerHTML){
      fade(secs);
      secPrev=secs.innerHTML;
    }else{
      let anims=secs.getAnimations();
      anims.forEach(anim=>{
          anim.cancel()
      })
    }

  },1000);
}

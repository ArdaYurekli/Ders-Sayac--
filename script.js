let seconds=0;

let interval;

function updateTimer(){

seconds++;

let h=Math.floor(seconds/3600);

let m=Math.floor((seconds%3600)/60);

let s=seconds%60;

document.getElementById("timer").innerHTML=

String(h).padStart(2,"0")+":"+

String(m).padStart(2,"0")+":"+

String(s).padStart(2,"0");

}

function startTimer(){

clearInterval(interval);

interval=setInterval(updateTimer,1000);

}

function stopTimer(){

clearInterval(interval);

let ai="";

if(seconds<1800){

ai="📚 Bugün biraz daha çalışmanı öneriyorum.";

}

else if(seconds<7200){

ai="👏 Güzel gidiyorsun. Aynı tempoda devam et.";

}

else{

ai="🏆 Harika! Bugünkü hedefini başarıyla tamamladın.";

}

document.getElementById("aiText").innerHTML=ai;

}

function resetTimer(){

clearInterval(interval);

seconds=0;

document.getElementById("timer").innerHTML="00:00:00";

document.getElementById("aiText").innerHTML="Henüz çalışma başlatılmadı.";

}

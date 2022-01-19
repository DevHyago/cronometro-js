let start = document.querySelector(".iniciar");
let pause = document.querySelector(".pausar");
let stop = document.querySelector(".parar");

let hh = 0;
let min = 0;
let sec = 0;

let temp = 1000; // Milesimos = 1 segundo
let cron;

start.addEventListener("click", () => {
   cron = setInterval(timer, temp);
});

pause.addEventListener("click", () => {
   clearInterval(cron);
});

stop.addEventListener("click", () => {
   clearInterval(cron);
   hh = 0;
   min = 0;
   sec = 0;
   document.querySelector("#counter").innerText = "00:00:00"
}) 

function timer(){
   sec++;

   if(sec == 60){
      sec = 0;
      min++;
      if(min == 60){
         min = 0;
         hh++;
      }
   }

   var format = (hh < 10 ? "0" + hh : hh) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
   document.querySelector("#counter").innerText = format;
}
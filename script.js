// selectors

let hourhand = document.getElementById("hourhand");
let minhand = document.getElementById("minhand");
let sechand = document.getElementById("sechand");

//making a function which runs on fix interval, you can use settime out also

setInterval(() => {


  //making time interval

  let time = new Date();

  // calling hours,second,min method from Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  // logic

  let hr = hour * 30 + min / 2;
  let mn = min * 6;
  let sc = sec * 6;

  //applying rotation in selectors

  hourhand.style.transform = `rotate(${hr}deg)`;
  minhand.style.transform = `rotate(${mn}deg)`;
  sechand.style.transform = `rotate(${sc}deg)`;
}, 1000);

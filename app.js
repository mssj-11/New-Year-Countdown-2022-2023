let day = document.getElementById('day');
let hour = document.getElementById('hr');
let minutes = document.getElementById('min');
let sec = document.getElementById('sec');

let endDate = new Date(2024, 0, 1, 00, 00);
let endTime = endDate.getTime();


function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMinute = 60 * 1000;
    let oneHour = 60 * oneMinute;
    let oneDay = 24 * oneHour;

    let addTime = (num) => (num < 10 ? `0${num}` : num);


    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector('.countdown').innerHTML = `<h1>Countdown Has Expired</h1>`;
    }else{
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
        let minutesLeft = Math.floor((remainingTime % oneHour) / oneMinute);
        let secLeft = Math.floor((remainingTime % oneMinute) / 1000);


        day.textContent = addTime(daysLeft);
        hour.textContent = addTime(hoursLeft);
        minutes.textContent = addTime(minutesLeft);
        sec.textContent = addTime(secLeft);
    }
}


let i = setInterval(countdown, 1000);
countdown();





//  Snow Effect
const body = document.querySelector('body');


const snowEffect = () => {
    let copo = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 8) + 2;
    let zIndeex = Math.round(Math.random()) * 100;   // Snow Before  TEXT AND CONTENT
    let delay = Math.random() * 5;  //  Flake(copos) Speed
    let animate = (Math.random() * 10) + 5;


    copo.style.left = x + 'px';
    copo.style.width = size + 'px';
    copo.style.height = size + 'px';
    copo.style.zIndex = zIndeex;
    copo.style.animationDelay = delay + 's';
    copo.style.animationDuration = animate + 's';

    body.appendChild(copo);


    //  Remove COPOS for a certain time
    setTimeout(() => {
        copo.remove();
    }, animate * 1000);
}

setInterval(snowEffect, 70);
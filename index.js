const clock = document.getElementById("clock");

function updateClock()
{
    const now = new Date();
    let hours = now.getHours();
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const aOrP = hours >= 12? "pm" : "am";

    hours = ((hours > 12)? hours % 12 : 12).toString().padStart(2, 0);;

    const myTime = `${hours} : ${min} : ${sec} ${aOrP}`;

    clock.textContent = myTime;
}

updateClock();

setInterval(updateClock, 1000);
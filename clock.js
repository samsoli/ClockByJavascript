const clock = () => {
    const date = new Date();
    // const hours = ((date.getHours() + 11) % 12 + 1);
    const hours = date.getHours() ;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    const s = (seconds < 10) ? "0" + seconds : seconds;

    document.querySelector('.hours').innerHTML = h;
    document.querySelector('.mins').innerHTML = m;
    document.querySelector('.secs').innerHTML = s;
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`;
    // hour.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
    // minute.setAttribute("transform", `rotate(${(360 / 12) * minute})`);
    // second.setAttribute("transform", `rotate(${(360 / 12) * seconds})`);
}
clock();
setInterval(clock)

var d = new Date();
document.getElementById("d").innerHTML = d.toDateString();
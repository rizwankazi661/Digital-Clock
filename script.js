setInterval(() => {
    let date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    document.querySelector('.hour-num').innerText = hour;
    document.querySelector('.min-num').innerText = minutes;
    document.querySelector('.sec-num').innerText = seconds;

}, 1000);
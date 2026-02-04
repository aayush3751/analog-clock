const geourl = "https://geocoding-api.open-meteo.com/v1/search?";
const city=document.querySelector("#name");
const button=document.querySelector("#submit");

async function  getZone(){
    const response = await fetch(
    geourl + "name=" + city.value + "&count=1"
  );
    let data=await response.json();
   
    console.log(data);
    const zone=data.results[0].timezone;
    startClock(zone);
 }
 function startClock(timeZone) {
setInterval(() => {
    const date = new Date(
    new Date().toLocaleString("en-US", {timeZone})
  );
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
 }
button.addEventListener("click",getZone);
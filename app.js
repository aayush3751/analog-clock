setInterval(() => {
    const date = new Date();

    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;
    console.log(stime);
    console.log(htime);
    console.log(mtime);
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

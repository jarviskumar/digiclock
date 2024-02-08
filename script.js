function digiClock() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let days = date.getDay()

    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let session = "AM"

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;



    let clock = document.getElementById("myClock")
    clock.innerHTML = ` ${h} : ${m} : ${s} ${session}`

    let dayDis = document.getElementById("DaysScr").innerHTML = dayArray[days]



    setTimeout(digiClock, 1000)
  }
  digiClock()

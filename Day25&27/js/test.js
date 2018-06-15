function Go() {
    console.log("Go");
}

function GoSteps(n) {
    if (typeof (n) === "undefined" || n === true) {
        Go();
    } else if (typeof (n) === "number" && Math.abs(n) === n && n !== 0) {
        n = Math.floor(n);
        while (n--) {
            Go();
        }
    } else {
        console.log("请输入正确的次数！");
    }
}



let steps = document.querySelector("#stepsTest");
steps.onclick = function () {
    alert("请打开控制台！");
    GoSteps(10); // Go 10次
    GoSteps(1); // Go 1次
    GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
    GoSteps(0); // 0次
    GoSteps(-1); // 0次
    GoSteps(1.4); // Go 1次
    GoSteps(1.6); // Go 1次
    GoSteps(-1); // 0次
    GoSteps(true); // Go 1次
    GoSteps(false); // 0次
    GoSteps("Test"); // 0次
    GoSteps(NaN); // 0次
    GoSteps(null); // 0次
}




let clockText = document.querySelector("#clock"),
    clock2Text = document.querySelector("#clock2");

function getWeekCN(day) {
    let str = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return str[day];
}

function getWeekEN(day) {
    let str = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return str[day];
}

function formatTime(arr) {
    let dateArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] < 10) {
        //     dateArr.push("0" + arr[i]);
        // } else {
        //     dateArr.push(arr[i]);
        // }
        dateArr.push(arr[i] < 10 ? "0" + arr[i] : arr[i]);
    }
    return dateArr;
}

function clock() {
    let time = new Date(),
        day = getWeekCN(time.getDay()),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hours = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds(),
        timeArr = formatTime([month, date, hours, min, sec]);


    clockText.value = time.getFullYear() + "年" + timeArr[0] + "月" + timeArr[1] + "日 " + day + " " + timeArr[2] + ":" + timeArr[3] + ":" + timeArr[4];
    // console.log(timeArr);
    setTimeout("clock()", 1000);
}

clock();

function clock2() {
    let time = new Date(),
        day = getWeekEN(time.getDay()),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hours = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds(),
        ampm = hours >= 12 ? " PM" : " AM",
        timeArr = formatTime([month, date, min, sec]);
    hours = hours % 12;
    hours = hours >= 10 ? hours : "0" + hours;
    clock2Text.value = time.getFullYear() + "-" + timeArr[0] + "-" + timeArr[1] + " " + day + " " + hours + ":" + timeArr[2] + ":" + timeArr[3] + ampm;
    // console.log(timeArr);
    setTimeout("clock2()", 1000);
}

clock2();

function timeDiffer(ev) {
    let target = ev.target;
    if (target.nodeName.toLowerCase() === "select") {
        let nowTime = new Date(),
            years = document.querySelector("#year-select").value,
            month = document.querySelector("#month-select").value,
            day = document.querySelector("#day-select").value,
            hour = document.querySelector("#hour-select").value,
            min = document.querySelector("#minite-select").value,
            sec = document.querySelector("#second-select").value,
            selTime = new Date(month + "/" + day + "/" + years + " " + hour + ":" + min + ":" + sec),
            timeDiff = ((nowTime.getTime() - selTime.getTime()) / 1000),
            timeDiff_1 = Math.abs(timeDiff),
            dateDiff,
            hourDiff,
            minDiff,
            secDiff,
            dayDiff = getWeekCN(selTime.getDay());

        dateDiff = Math.floor(timeDiff_1 / 86400);
        timeDiff_1 = timeDiff_1 % 86400;
        hourDiff = Math.floor(timeDiff_1 / 3600);
        timeDiff_1 = timeDiff_1 % 3600;
        minDiff = Math.floor(timeDiff_1 / 60);
        secDiff = Math.floor(timeDiff_1 % 60);
        if (Math.abs(timeDiff) !== timeDiff) {
            differ.innerText = "现在距离 " + years + "年" + month + "月" + day + "日" + dayDiff + " " + hour + ":" + min + ":" + sec + " 还有 " + dateDiff + " 天 " + hourDiff + " 小时 " + minDiff + " 分钟 " + secDiff + "秒";
        } else {
            differ.innerText = "现在距离 " + years + "年" + month + "月" + day + "日" + dayDiff + " " + hour + ":" + min + ":" + sec + " 已经过去 " + dateDiff + " 天 " + hourDiff + " 小时 " + minDiff + " 分钟 " + secDiff + "秒";
        }
    }
}

let differ = document.querySelector("#result-wrapper"),
    box = document.querySelector("#box");

box.addEventListener("change", timeDiffer);
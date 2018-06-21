let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'],
    email = document.querySelector("#email-input"),
    emailSug = document.querySelector("#email-sug-wrapper"),
    str;

function emailPrompt() {
    addNode();
}

function getEmail() {
    return email.value.replace(/(^\s+)|(\s+$)/g, "");
}


// function getEmail() {
//     let x = email.value.replace(/(^\s+)|(\s+$)/g, ""),
//         y = x.indexOf("@");
//     if (y !== -1) {
//         return x.slice(0, y);
//     } else {
//         return x;
//     }
// }
//  需求2

// function getNode() {
//     let arr = [];
//     str = getEmail();

//     if (str.length > 0) {
//         for (let i of postfixList) {
//             arr.push(str + "@" + i);
//         }
//         return arr;
//     }
// }

function getNode() {
    str = getEmail();
    let arr = [],
        y = str.indexOf("@");
    if (y !== -1) {
        let strLeft = str.slice(0, y),
            strRight = str.slice(y + 1);
        for (let i of postfixList) {
            if (i.indexOf(strRight) === 0) {
                arr.push(strLeft + "@" + i);
            }
        }

        if (arr.length > 0) {
            return arr;
        } else {
            for (let i of postfixList) {
                arr.push(strLeft + "@" + i);
            }
            return arr;
        }
    } else {
        for (let i of postfixList) {
            arr.push(str + "@" + i);
            // console.log(arr);
        }
        return arr;
    }
}

function addNode() {
    let node = getNode(),
        x = postfixList.length,
        y;

    emailSug.innerHTML = "";
    if (node) {
        for (let i of node) {
            y = document.createElement("li");
            y.innerText = i;
            emailSug.appendChild(y);
        }
    }
    emailSugHide();
}

function emailSugHide() {
    if (str.length === 0) {
        emailSug.style.setProperty("display", "none");
    } else {
        emailSug.style.setProperty("display", "block");
    }
}

function listenMouse(ev) {
    let target = ev.target;
    if (target.nodeName.toLowerCase() === "li") {
        email.value = target.innerText;
        emailSug.style.setProperty("display", "none");
    }
}



email.addEventListener("input", emailPrompt);
emailSug.addEventListener("click", listenMouse);
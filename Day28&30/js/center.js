let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'],
    email = document.querySelector("#email-input"),
    emailSug = document.querySelector("#email-sug-wrapper"),
    str;

function emailPrompt() {
    addNode();
}

// function getEmail() {
//     return email.value.replace(/(^\s+)|(\s+$)/g, "");
// }

function getEmail() {
    let x = email.value.replace(/(^\s+)|(\s+$)/g, ""),
        y = x.indexOf("@");
    if (y !== -1) {
        return x.slice(0, y);
    } else {
        return x;
    }
}

function getNode() {
    let arr = [];
    str = getEmail();

    if (str.length > 0) {
        for (let i of postfixList) {
            arr.push(str + "@" + i);
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




email.addEventListener("input", emailPrompt);
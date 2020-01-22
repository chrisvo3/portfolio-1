function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var company = document.getElementById("company").value;
    var content = document.getElementById("content").value;
    var subject = document.getElementById("subj").value;

    if (name !== null && name !== '' && subject !== null && subject !== '' && email !== null && email !== '' && phone !== null && phone !== '' && content !== null && content !== '') {
        var link = "mailto:vochris3%40gmail%2ecom" + "?subject=" + subject + "&body=" + content + "\n";
        window.location.href = link;

        alert("Thank you! I will make sure to reply ASAP!");
    }
    else {
        alert("Please enter all the required inputs.");
    }
}

/* PROCESS BAR */
function moveVN() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.innerHTML = "fluent";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
            elem.style.backgroundColor = "#d9534f";

        }
    }
}

function moveEN() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
            elem.innerHTML = "advanced";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
            elem.style.backgroundColor = "#5bc0de";
        }
    }
    
}

function moveJP() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
            elem.innerHTML = "intermediate";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
            elem.style.backgroundColor = "#f0ad4e";
        }
    }
}


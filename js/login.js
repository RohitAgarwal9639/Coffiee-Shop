import { getDatabase, get, ref, set, update, remove, child }
    from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';

const db = getDatabase();
//reference
var EmailBox = document.getElementById("emailbox");
var PassBox = document.getElementById("passbox");

document.querySelectorAll(".button")[0].onclick = sendData;

function sendData(event) {
    event.preventDefault();
    readfromdata();

    set(ref(db, "login/" + emailV), {
        Email: emailV,
        Password: passV,
    }).then(() => {
        alert("Data Stored Successfully")
    }).catch((error) => {
        alert("Unsuccessfull", error);
    });
    clearformdata();
}

function clearformdata() {
    NameBox.value = "";
    EmailBox.value = "";
    MessageBox.value = "";
}
var emailV, passV;
function readfromdata() {
    emailV = EmailBox.value;
    passV = PassBox.value;
    console.log(emailV, passV);
}
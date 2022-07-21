import { getDatabase, get, ref, set, update, remove, child }
    from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';

const db = getDatabase();
//reference
var NameBox = document.getElementById("namebox");
var EmailBox = document.getElementById("emaillbox");
var NumBox = document.getElementById("numbox");

document.querySelectorAll(".btnn")[0].onclick = sendData;

function sendData(event) {
    event.preventDefault();
    readfromdata();

    set(ref(db, "contact/" + nameV), {
        Name: nameV,
        Email: emailV,
        Number: numV,
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
    NumBox.value = "";
}
var nameV, emailV, numV;
function readfromdata() {
    nameV = NameBox.value;
    emailV = EmailBox.value;
    numV = NumBox.value;
    console.log(nameV, emailV, numV);
}
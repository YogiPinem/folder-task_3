function about () {
    var hide = document.getElementById("about")
    if (hide.style.display === "none"){
        hide.style.display = "block"
    }else {
        hide.style.display = "none";
    }
}

function hideMessage () {
    var hide = document.getElementById("input")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}

function getMessage() {
    var take = document.getElementById("pesan").value;
    document.getElementById("hasil").innerHTML = take;
}

function social () {
    var hide = document.getElementById("sosmed")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}
// Author : Sonu J
function completebooking() {
    let a1 = document.getElementById("input-1").value;
    let a2 = document.getElementById("inp2").value;
    let s1 = document.getElementById("select-1").value;
    let a3 = document.getElementById("inp3").value;
    let a4 = document.getElementById("inp4").value;
    let a5 = document.getElementById("inp5").value;
    let a6 = document.getElementById("inp6").value;
    let a7 = document.getElementById("inp7").value;
    let a8 = document.getElementById("inp8").value;
    let a9 = document.getElementById("inp9").value;
    // let l1 = a1.length;
    let fname = /^[a-z](?:[a-z0-9]*[a-z0-9])?$/;
    let fmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let nmbr = /^[0-9]$/;
    if (a1 == "") {
        alert("enter name");
        return false;
    } else if (!fname.test(a1)) {
        alert("enter valid name");
        return false;
    } else if (a2 == "") {
        alert("enter email");
        return false;
    } else if (!fmail.test(a2)) {
        alert("email is not valid");
        return false;
    } else if (s1 == "0") {
        alert("Select destination");
        return false;
    } else if (a3 == "") {
        alert("enter date");
        return false;
    } else if (a4 == "") {
        alert("enter number of persons");
        return false;
    } else if (!nmbr.test(a4)) {
        alert("invalid number of persons");
        return false;
    } else if (
        document.getElementById("inp5").checked == false &&
        document.getElementById("inp6").checked == false &&
        document.getElementById("inp7").checked == false
    ) {
        alert("choose any availabilities");
        return false;
    } else if (
        document.getElementById("inp8").checked == false &&
        document.getElementById("inp9").checked == false
    ) {
        alert("agree to the terms and conditions");
        return false;
    } else {
        return true;
    }
}

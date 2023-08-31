let username = prompt("Siapakah nama anda?", "");
document.getElementById("name").innerHTML = username

function submitButton() {
    const name = document.getElementById("full-name").value ;
    const birth = document.getElementById("birth-date").value ;
    const gender = document.getElementsByName("gender");
    const message = document.getElementById("message").value ;
    document.getElementById("sender-full-name").innerHTML = "<b>" + "Name :" + name +"</b>";
    document.getElementById("sender-birth-date").innerHTML = "<b>" + "Date of Birth :" + birth +"</b>";
    document.getElementById("sender-message").innerHTML = "<b>" + "Message :" + message +"</b>";

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            document.getElementById("sender-gender").innerHTML
                = "<b>" + "Gender: " + gender[i].value + "<b>";
    }
}

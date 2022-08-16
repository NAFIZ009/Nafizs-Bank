let logInfo=[
    {
        email:"jalalnafiz3@gmail.com",
        password:"jalalnafiz"
    }
]
document.getElementById("btn").addEventListener("click", function(e) {
    let password=document.getElementById("pass").value;
    let email=document.getElementById("mail").value;
    if (password==logInfo[0].password && email==logInfo[0].email) {
        window.location.replace("main/main.html");
        document.getElementById("warningPass").classList.add("d-none");
        document.getElementById("warningMail").classList.add("d-none");
        document.getElementById("success").classList.remove("d-none");

    }
    if (password!=logInfo[0].password) {
        document.getElementById("warningPass").classList.remove("d-none");
    }
    if (email!=logInfo[0].email) {
        document.getElementById("warningMail").classList.remove("d-none");
    }
});
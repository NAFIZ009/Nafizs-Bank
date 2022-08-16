let logInfo=[
    {
        email:"tomarMail@gmail.com",
        password:"duhkteDao"
    },
    {
        email:"amrMail@gmail.com",
        password:"duhkteDaoPart2"
    },
    {
        email:"shobarMail@gmail.com",
        password:"duhkteDaoPart3"
    },
    {
        email:"awamiMail@gmail.com",
        password:"duhkteDaoPart4"
    },
    {
        email:"bnpMail@gmail.com",
        password:"duhkteDaoPart5"
    },
]
document.getElementById("btn").addEventListener("click", function(e) {
    let password=document.getElementById("pass").value;
    let email=document.getElementById("mail").value;
    logInfo.forEach(function(item) {
        if (password==item.password && email==item.email) {
            window.location.replace("main/main.html");
            document.getElementById("warningPass").classList.add("d-none");
            document.getElementById("warningMail").classList.add("d-none");
            document.getElementById("success").classList.remove("d-none");
    
        }
        if (password!=item.password) {
            document.getElementById("warningPass").classList.remove("d-none");
        }
        if (email!=item.email) {
            document.getElementById("warningMail").classList.remove("d-none");
        }
    });
});
displaycard = ()=>{
    let elem = document.getElementsByClassName("add-card-form")[0];
    elem.style.display = "block";
    document.getElementsByClassName("filterMe")[0].style.display = "block";
}
closeCard = ()=>{
    let elem = document.getElementsByClassName("add-card-form")[0];
    elem.style.display = "none";
    document.getElementsByClassName("filterMe")[0].style.display = "none";
}

deletealert = ()=>{
    document.getElementsByClassName("delete-alert")[0].style.display = "block";
    document.getElementsByClassName("filterMe")[0].style.display = "block";
}
closedeleteAlert = ()=>{
    document.getElementsByClassName("delete-alert")[0].style.display = "none";
    document.getElementsByClassName("filterMe")[0].style.display = "none";
}
closeCardSettings = ()=>{
    let elem = document.getElementsByClassName("card-settings-form")[0];
    elem.style.display = "none";
    document.getElementsByClassName("filterMe")[0].style.display = "none";
}
openCardSettings = ()=>{
    let elem = document.getElementsByClassName("card-settings-form")[0];
    elem.style.display = "block";
    document.getElementsByClassName("filterMe")[0].style.display = "block";
}
redirect = ()=>{
    window.open("https://www.facebook.com");
}

closeOtpBox = ()=>{
    document.getElementsByClassName("otp-box")[0].style.display = "none";
    document.getElementsByClassName("filterMe")[0].style.display = "none";
}
openOtpBox = ()=>{
    document.getElementsByClassName("otp-box")[0].style.display = "block";
    document.getElementsByClassName("filterMe")[0].style.display = "block";
}
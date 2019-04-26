activatePhone = ()=>{
    let x = document.getElementsByClassName("inp-email")
    for(let e of x){
        e.style.display = "none";
    }
    x = document.getElementsByClassName("inp-phone")
    for(let e of x){
        console.log(e);
        
        e.style.display = "block";
    }  
}
activateEmail = ()=>{
    let x = document.getElementsByClassName("inp-phone")
    for(let e of x){
        e.style.display = "none";
    }
    x = document.getElementsByClassName("inp-email")
    for(let e of x){
        e.style.display = "block";
    }
}
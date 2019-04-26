
var headcount = 0;
let active = 0;

function switchheads() {
    var heads = document.getElementsByClassName("bannerparagraph");
    for (var i = 0; i < heads.length; i++)
        heads[i].classList.add("active");
    if (headcount >= heads.length) { headcount = 0 }
    heads[headcount].classList.remove("active");
    headcount++;
    setTimeout(switchheads, 2000);
};
function sto(e){
    let x = e.id.split("#")[1];
    let elem = document.getElementById(x).offsetTop;
    setTimeout(()=>{
        window.scrollTo(0,elem);
    },200);
}
function showbar(){
    
    let x = document.getElementsByClassName("resmenu");
    if(!active){
        x[0].style.display="block";
        active=!active;
    }else{
        x[0].style.display="none";
        active=!active;
    }
}

(() => {
    switchheads();
    window.onload = () => {
        window.pageYOffset = 0;
    };
    window.onscroll = () => {
        let x = document.getElementsByClassName("flex-container");
        if (window.scrollY > 580)
            x[0].classList.add("active");
        else
            x[0].classList.remove("active");
    }


})();
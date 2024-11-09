// sidebar toggle:
let sidebar = document.querySelector(".content");
let content2 = document.querySelector(".content2");

let barMenu = document.querySelector(".bar-menu");
let barMenu2 = document.querySelector(".bar-menu2");

// barMenu2.classList.add("remove")

barMenu.addEventListener("click", ()=>{
    console.log("clicked");

    sidebar.style.display = "none";
    content2.style.paddingLeft = "2.1rem";

    barMenu.classList.add("remove");
    barMenu2.classList.remove("remove");
    // barMenu.classList.remove("remove")

    // barMenu.style.display = "none";
    // barMenu2.style.display = "block";
})

// bringing the side menu back in place:

barMenu2.addEventListener("click", ()=>{
    // barMenu.style.display = "none";
    sidebar.style.display = "initial";
    barMenu.classList.remove("remove");
    barMenu2.classList.add("remove");
    // barMenu.style.display = "none";
    // barMenu2.style.display = "none";
})

// side-nav toggle :
let threeDots = document.querySelector(".three-dots");
let sideNav = document.querySelector(".side-nav");
let cross = document.querySelector(".cross");

threeDots.addEventListener("click", ()=>{
    sideNav.classList.add("side-side")
    threeDots.style.display = "none";
    cross.style.display = "initial";
    // sideNav.style.position = "absolute";
})

cross.addEventListener("click", ()=>{
    sideNav.classList.remove("side-side");
    threeDots.style.display = "initial";
    cross.style.display = "none";
})
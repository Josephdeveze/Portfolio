const openMenu = () =>{
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-symbols-outlined").innerHTML = "close"
    }
    else{
        document.querySelector("header .material-symbols-outlined").innerHTML = "menu"
    }
}
document.querySelector(".hamburger-icon").addEventListener("click", function(){
    document.querySelector(".mobile-menu-div").classList.toggle("mobile-menu-dispaly");
});

document.querySelector(".mobile-home").addEventListener("click", function(){
    document.querySelector(".mobile-home-sub-menu-div").classList.toggle("sub-menu-displays");
});

document.querySelector(".subka-sub-menu").addEventListener("click", function(){
    document.querySelector(".mobile-sub-menu-sub-menu").classList.toggle("super-sub-menu-displays");
});
let nav = document.getElementById("nav");
console.log(nav);
let buttons_config = document.getElementById("config_page");
let btn_config_childrens = buttons_config.children;
console.log(buttons_config);
let arrow_btn = btn_config_childrens[0];
let language_btn = btn_config_childrens[1];
let darkmode_btn = btn_config_childrens[2];
window.addEventListener("scroll",()=>{
    //console.log(window.scrollY);
    nav.classList.toggle("navbar-scrolled",window.scrollY>100);
    buttons_config.classList.toggle("config_page-scrolled",window.scrollY>100);
});
console.log(arrow_btn);
arrow_btn.addEventListener("click",()=>{
    buttons_config.classList.toggle("config_page-open");
    let actual_ico = arrow_btn.firstElementChild
    console.log('actual_ico:', actual_ico)
    const arrow_left_ico = "fa-caret-left"
    const arrow_right_ico = "fa-caret-right"  
    if (actual_ico.classList.replace(arrow_left_ico, arrow_right_ico) == false) {
        actual_ico.classList.replace(arrow_right_ico, arrow_left_ico)
    }   
});
language_btn.addEventListener("click",()=>{
    const flag_eng = "eng_flag.png";
    const flag_esp = "esp_flag.png";
    let img_full_path = language_btn.firstElementChild.src;
    let img_cut_path = img_full_path.split("/");
    let img_name = img_cut_path.slice(-1);
    let previous_img_removed = img_cut_path.slice(0,-1)
    let new_path = previous_img_removed.join("/")
    //console.log(new_path)
    //console.log(previous_img_removed)
    
    //Alternate the flags like a toggle function
    if (img_name == flag_eng) {
        language_btn.firstElementChild.setAttribute("SRC", new_path+"/"+flag_esp);
    } else {
        language_btn.firstElementChild.setAttribute("SRC", new_path+"/"+flag_eng);
    }
});
darkmode_btn.addEventListener("click",()=>{
    //console.log('darkmode_btn.classList:', darkmode_btn.firstElementChild.classList)
    let actual_ico = darkmode_btn.firstElementChild
    const moon_ico = "fa-moon"
    const sun_ico = "fa-sun"  
    //console.log('a', actual_ico.classList.replace(moon_ico, sun_ico)) 
    if (actual_ico.classList.replace(moon_ico, sun_ico) == false) {
        actual_ico.classList.replace(sun_ico, moon_ico)
    }   
});
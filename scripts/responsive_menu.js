const btn = document.getElementById('menu-responsive-btn');
const menu = document.getElementById('responsive-menu');

console.log(menu.classList.contains("opened"));

btn.addEventListener("click",() =>{
    if (menu.classList.contains("opened")) {
        menu.classList.remove('opened');
        let icon = btn.lastElementChild;
        icon.classList.replace("fa-circle-xmark", "fa-bars") ;
        
    }else{
        menu.classList.toggle('opened');
        let icon = btn.lastElementChild;
        console.log(icon.classList);
        icon.classList.replace('fa-bars','fa-circle-xmark');
    }
    
});
const links = document.querySelectorAll('#responsive-menu > ul > a');
links.forEach(button => {
	//Agregar listener
    //console.log('boton:', button)
	button.addEventListener("click", function (event) {
        if (menu.classList.contains("opened")) {
            menu.classList.remove('opened');
            let icon = btn.lastElementChild;
            icon.classList.replace("fa-circle-xmark", "fa-bars") ;
            
        }
    });
});

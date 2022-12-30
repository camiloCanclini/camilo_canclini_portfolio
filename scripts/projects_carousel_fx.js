let carousel_container = document.querySelectorAll('.projects_img-carousel > button');
console.log('carousel_container:', carousel_container)

carousel_container.forEach(button => {
	//Agregar listener
    console.log('boton:', button)
	button.addEventListener("click", function (event) {
        // Recuerda, this es el elemento
        console.log(this);
        let buttonDirection = this.className;
        parentContainer = this.parentNode;
        let pos_value = parseInt(parentContainer.getAttribute("pos"));
        const imgs = parentContainer.getElementsByTagName("IMG")

        imgs[pos_value].style.opacity = "0";

        const quantity_imgs = imgs.length-1;
        if (buttonDirection == "right") {
            let new_pos = pos_value+1;
            parentContainer.setAttribute("pos",new_pos);
            if (pos_value >= quantity_imgs) {
                new_pos = 0
                parentContainer.setAttribute("pos",new_pos);
                imgs[new_pos].style.opacity = 1;
            }else{
                imgs[new_pos].style.opacity = 1;
            }
        } else {
            let new_pos = pos_value-1;
            parentContainer.setAttribute("pos",new_pos);
            if (pos_value <= 0) {
                new_pos = quantity_imgs
                parentContainer.setAttribute("pos",new_pos);
                imgs[new_pos].style.opacity = "1";
            }else{
                imgs[new_pos].style.opacity = 1;
            }
        }
        console.log(parentContainer.getAttribute("pos")); 
        //this.innerHTML = "hola";
        console.log('this:', parentContainer)  
        console.log('this:', this)  
    });
});
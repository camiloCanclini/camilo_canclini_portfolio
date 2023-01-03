let originalSpeed = 100;
let delaySpeed = 2000
let speed = 0;
let array_pos = -1
let letter_pos = 0;
let texts = ["Hello World!", "I am Camilo Canclini","And I am Web Developer"];
let state = "write";
let writing = false;
let deleting = true;
let currentText = []
let display_text = document.getElementById('welcome_t1')


/* write = setInterval(() => {
    container = document.getElementById('welcome_t1');
    if (i < text.length) {
        container.innerHTML += text.charAt(i);
        console.log('text.charAt(i):', text.charAt(i))
        console.log(i);
        i++;
    }else{
        i = 0
        console.log(i);
        textWrited = true;
        clearInterval(write) //text writed
    }
}, speed);

unwrite = setInterval(() => {
    if (textWrited == true) {
        container = document.getElementById('welcome_t1');
        console.log(container.innerHTML.length > 0)
        console.log(container.innerHTML.length)
        if (container.innerHTML.length > 0) {
            container.innerHTML = container.innerHTML.slice(0,text.length-i)
            console.log(i);
            i++;
        }else{
            i = 0
            console.log(i);
            textWrited = false;
            clearInterval(unwrite);
            write;
        } 
    }
}, speed); */
console.log(texts.length);
function writingFx(){
    speed = originalSpeed;
    //console.log('texts[array_pos].length:', texts[array_pos].length)
    if(letter_pos == 0 && writing == false && deleting ==true && array_pos<texts.length-1){//Empezando a escribir frase
        writing = true; //Empezando a escribir
        deleting = false
        
        array_pos++;
        //console.log('empezando a escribir palabra');
    }
    if (writing == true && currentText.length <= letter_pos) {
        currentText.push(texts[array_pos].charAt(letter_pos))
        letter_pos++
        //console.log("writing: ", currentText);
        if (letter_pos == texts[array_pos].length) {
            speed = delaySpeed;
        }
    }
    if(currentText.length > 0 && deleting == true && writing == false){//Se borra una letra
        deleting = true
        writing = false
        letter_pos--
        currentText.pop()
        //console.log("deleting: ", currentText);
        if (letter_pos == 0) {
            speed = delaySpeed;
        }
    }
    if (currentText.length == texts[array_pos].length) {//Frase Terminada, borrando
        writing = false
        deleting = true
        //console.log('empezando a borrar');
    }
    if (array_pos == texts.length-1 && writing == false && deleting == true){
        array_pos = 0 // volvemos al inicio con los textos
    }
    //console.log('array_pos:', array_pos)
    //console.log("loop", letter_pos, array_pos);
    display_text.innerHTML = currentText.join('')
    setTimeout(writingFx, speed)
}
setTimeout(writingFx, 2000);

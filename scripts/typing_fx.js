let speed = 200;
let i = 0, j = 0;
let textWrited = false;
let text = "Hello World!";

write = setInterval(() => {
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
}, speed);

let text = document.querySelector(".paragraphe");

let color = false;
for (i=0; i<100 ; i++) {
    color = !color;
    if (color == false){
        text.inerHTML("I WANT TO BREAK FREEEE");
        text.style.backgroundColor = "red";
    } else {
        text.inerHTML("A DADA SUR MON BIDET");
        text.style.backgroundColor = "yellow";
        text.style.color = "blue";
    }
}
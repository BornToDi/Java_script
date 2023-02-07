

var photos = ["/img/p.png","/img/z.png","/img/a.png"];
var image= document.querySelector("img");

var count =0;

function next(){

    count++;

    if(count>= photos.length){
        count=0;
        image.src= photos[count];
    }
    image.src= photos[count];
}

function prev(){
    count--;

    if(count< 0){
        count=2;
        image.src= photos[count];
    }
    image.src= photos[count];
}
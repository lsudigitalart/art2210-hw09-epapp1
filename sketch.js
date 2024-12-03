var img1;
var img2;
var img3;
var img4;
var img5;


function preload() {
    img1 = loadImage("Cat1.png");
    img2 = loadImage("Cat2.png");
    img3 = loadImage("Cat3.png");
    img4 = loadImage("Cat4.png");
    img5 = loadImage("grass.jpg");
}

function setup() {
    createCanvas(900, 600);

    let randSpeed1 = random(5, 30);
    let randSpeed2 = random(5, 30);
    let randSpeed3 = random(5, 30);
    let randSpeed4 = random(5, 30);

    cat1 = new Cat(img1, 900, -100, randSpeed1);
    cat2 = new Cat(img2, 900, 50, randSpeed2);
    cat3 = new Cat(img3, 900, 150, randSpeed3);
    cat4 = new Cat(img4, 900, 100, randSpeed4);

}

function draw() {
    background(img5);

    cat1.move();
    cat1.display();

    cat2.move();
    cat2.display();
    
    cat3.move();
    cat3.display();

    cat4.move();
    cat4.display();




}

function Cat(img, tempX, tempY, tempSpeed) {
    this.catImage = img;
    this.xpos = tempX;
    this.ypos = tempY;
    this.speed = tempSpeed;

    this.move = function(){
        this.xpos += random(-this.speed);
    }

    this.display = function(){
        image(this.catImage, this.xpos, this.ypos,);
    }

}
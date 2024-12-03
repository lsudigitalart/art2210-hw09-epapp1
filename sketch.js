var img1;
var img2;
var img3;
var img4;


function preload() {
    img1 = loadImage("Cat1.png");
    img2 = loadImage("Cat2.png");
    img3 = loadImage("Cat3.png");
    img4 = loadImage("Cat4.png");
}

function setup() {
    createCanvas(400, 600);

    let randSpeed1 = random(0.5, 5);
    let randSpeed2 = random(0.5, 5);
    let randSpeed3 = random(0.5, 5);
    let randSpeed4 = random(0.5, 5);

    cat1 = new Cat(img1, 20, 50, randSpeed1);
    cat2 = new Cat(img2, 20, 150, randSpeed2);
    cat3 = new Cat(img3, 20, 250, randSpeed3);
    cat4 = new Cat(img4, 20, 350, randSpeed4);

}

function draw() {
    background(140, 175, 186);

}

function Cat(img, tempX, tempY, tempSpeed); {
    this.catImage = img;
    this.xpos = tempX;
    this.ypos = tempY;
    this.speed = tempSpeed;

}

let billyX = 350, billyY = 323, dvijaSe, karlsonLeftX = 900, karlsonLeftY = 260, karlsonRightX = -150, karlsonRightY = 260;
let skorostKarlson = 2, skorostKarlson2 = 2, random;
let healthX = 605, healthY = 15, health = 100;
let points = 0, milkX = randomInteger(700), milkY = 5000;

let playing = false;
let myAudio = document.querySelector('#audio');
myAudio.play();

function init() {

    dvijaSe = false;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
   //myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;

    if(health <= 0){
        playing = "over";
    };

    if(health > 100){
        health = 100;
    };

    if(playing == true){

//Billy

    if(isKeyPressed[65]){
        dvijaSe = "left";
    };

    if(isKeyPressed[68]){
        dvijaSe = "right";
    };

    if(isKeyPressed[83]){
        dvijaSe = false;
    };

    if(dvijaSe == "left"){
        billyX -= 3;
    };

    if(dvijaSe == "right"){
        billyX += 3;
    };

    if(billyX <= 0){
        billyX = 1;
    };

    if(billyX >= 700){
        billyX = 699;
    };

//Karlson

    karlsonLeftX -= skorostKarlson;
    karlsonRightX += skorostKarlson2;

    random = randomInteger(3000);
    if(random <= 2){
        skorostKarlson += 3;
    };

    if(random <= 3){
        skorostKarlson2 += 1;
    };

    if(skorostKarlson > 10){
        skorostKarlson = 10;
    };

    if(skorostKarlson2 > 10){
        skorostKarlson2 = 10;
    };

    if(karlsonLeftX <= -150){
        karlsonLeftX = 900;
    };

    if(karlsonRightX >= 900){
        karlsonRightX = -150;
    };

//Touching

    if(areColliding(billyX, billyY, 100, 150, karlsonLeftX, karlsonLeftY, 100, 200) && dvijaSe == "right"){
        points++;
        karlsonLeftX = 900;
    };

    if(areColliding(billyX, billyY, 100, 150, karlsonRightX, karlsonRightY, 100, 200) && dvijaSe == "left"){
        points++;
        karlsonRightX = -150;
    };

    if(areColliding(billyX, billyY, 100, 150, karlsonLeftX, karlsonLeftY, 100, 200) && dvijaSe == "left"){
        health = health - 25;
        karlsonLeftX = 900;
    };

    if(areColliding(billyX, billyY, 100, 150, karlsonRightX, karlsonRightY, 100, 200) && dvijaSe == "right"){
        health = health - 25;
        karlsonRightX = -150;
    };

    if(areColliding(billyX, billyY, 100, 150, karlsonRightX, karlsonRightY, 100, 200) && dvijaSe == false){
        health = health - 25;
        karlsonRightX = -150;
    };

    if(areColliding(billyX, billyY, 100, 150, karlsonLeftX, karlsonLeftY, 100, 200) && dvijaSe == false){
        health = health - 25;
        karlsonLeftX = 900;
    };

    if(areColliding(billyX, billyY, 100, 150, milkX, milkY, 70, 120)){
        health += 50;
    };

    };
}
function draw() {
    //drawImage(backDesert, 0, 0, 800, 600);

    if(playing == true){

    drawImage(groundGrass, -1000, 460, 10000, 1000);

//Billy

    if(dvijaSe == "right"){
        drawImage(billyMovingRight, billyX, billyY, 100, 150);
    };

    if(dvijaSe == false){
        drawImage(billyNormal, billyX, billyY, 100, 150);
    };

    if(dvijaSe == "left"){
        drawImage(billyMovingLeft, billyX, billyY, 100, 150);
    };

//Karlson

    drawImage(karlsonRight, karlsonRightX, karlsonRightY, 100, 200);
    drawImage(karlsonLeft, karlsonLeftX, karlsonLeftY, 100, 200);

//Health

    drawImage(box, 600, 10, 110, 60);
    drawImage(paddle, healthX, healthY, health, 50);

//Points

    context.font = "20px Arial"
    context.fillStyle = "black"
    context.fillText("Points:" + points, 350, 30, 400, 10);

//Milk

    if(health < 50){
    drawImage(milk, milkX, milkY, 70, 120);
    milkY = 380;
    }else{
        milkY = 5000;
    }

    };

//start screen
    if(playing == false){

        context.font = "40px Arial"
        context.fillStyle = "Black"
        context.fillText("Barlson", 300, 80, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("A game made for the youtuber Dani from a fan (Dami) <3", 170, 130, 400, 10);

        context.font = "15px Arial"
        context.fillStyle = "black"
        context.fillText("Click here to play not copywrited music (I believe)", 10, 5, 400, 10);

        context.font = "60px Arial"
        context.fillStyle = "black"
        context.fillText("PLAY", 300, 350, 450, 95);

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("Points:" + points, 320, 250, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("A - start moving left", 10, 30, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("D - start moving right", 10, 50, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("S - stop moving", 10, 70, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("Milk - heals and Karlson - kills", 10, 200, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("The blue bar is your health.", 10, 220, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("Try to touch Karlson while moving twards him to gain a point.", 10, 450, 450, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("Good luck and thank you for playing Barlson.", 10, 470, 400, 10);

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("For Dani:", 600, 200, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("Do you allow me to upload the game on my website?", 500, 250, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("on my website?", 500, 270, 400, 10);

        context.font = "20px Arial"
        context.fillStyle = "black"
        context.fillText("https://bit.ly/3OG84Cf", 500, 290, 400, 10);

    };

//end screen
    if(playing == "over"){

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("Points:" + points, 320, 100, 400, 10);

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("Refresh the page to play again <3", 200, 300, 400, 10);

    };

}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);

    if(areColliding(mouseX, mouseY, 0, 0, 300, 350, 450, 95) && mouseup){
        playing = true;
    };

}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);

}

var database = firebase.database();

var balloonPosition = database.ref('balloon/Position');
balloonPosition.on("value", readPosition, showError);


var bg;
var balloon;
var balloonImage,balloonImage2;

function preload(){

bg=loadImage("Hot Air Ballon-01.png");
balloonImage=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
balloonImage2=loadAnimation("Hot Air Ballon-04.png","Hot Air Ballon-03.png","Hot Air Ballon-02.png");
}



function setup() {
  createCanvas(800,500);

 balloon=createSprite(350,400,50,50);
 balloon.addAnimation("hotAirBalloon",balloonImage);
 balloon.scale=0.4;

}



function draw() {
  background(bg); 
  
stroke("red");
strokeWeight(7);
fill("black");
text("Use Arrow Keys to move Hot Air Balloon!!",50,30);



if (keyDown(LEFT_ARROW)){
  balloon.x = balloon.x -10;
}

else if (keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
 // console.log(balloon.x);
}

else if (keyDown(UP_ARROW)){
  balloon.y = balloon.y - 10;
  //console.log(balloon.y);
  balloon.scale = balloon.scale - 0.01;
}
else if (keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10;
  balloon.scale = balloon.scale + 0.01;
}


  

balloon.display();
  drawSprites();
}

function updateHeight(x,y){
database.ref('balloon/height').set({
  'x': height.x + x,
})
}

function readHeight(data){
  height= data.val();
  balloon.x=height.x;
  balloon.y=height.y;
}

function showError(){
console.log("Error in writing to the database");

}


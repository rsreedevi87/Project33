var Engine = Matter.Engine
var World = Matter.World
var Events = Matter.Events
var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  
}
 


function draw() {
  background("black");
  textSize(30);
  fill("#8DD6DF");
  textFont("Times New Roman")
  text("PLINKO GAME",60,40);
  textSize(20);
  fill("#A9AAD6");
  textFont("Arial");
  text("SCORE : " + score,600,40)

  textSize(30);
  fill("#BEF0F3")
  text("500",15,545);
  text("500",95,545);
  text("500",175,545);
  text("500",255,545);
  text("100",335,545);
  text("100",415,545);
  text("100",495,545);
  text("200",570,545);
  text("200",650,545);
  text("200",730,545);
  Engine.update(engine);
  ground.display();

  // TO INCREASE SCORE OF FIRST PARTICLE
  if(particles[0]){
  if(particles[0].body.position.y > 450 && particles[0].body.position.y < 457 ){
     
    if(particles[0].body.position.x >10 && particles[0].body.position.x <327){
      score = score+500;
    }

  }
}

if(particles[0]){
  if(particles[0].body.position.y > 450 && particles[0].body.position.y < 457 ){
     
    if(particles[0].body.position.x >330 && particles[0].body.position.x <566){
      score = score+100;
    }

  }
}

if(particles[0]){
  if(particles[0].body.position.y > 450 && particles[0].body.position.y < 457 ){
     
    if(particles[0].body.position.x >570 && particles[0].body.position.x <805){
      score = score+200;
    }

  }
}

// TO INCREASE THE SCORE FOR THE SECOND PARTICLE
if(particles[1]){
  if(particles[1].body.position.y > 450 && particles[1].body.position.y < 457 ){
     
    if(particles[1].body.position.x >10 && particles[1].body.position.x <327){
      score = score+500;
    }

  }
}

if(particles[1]){
  if(particles[1].body.position.y > 450 && particles[1].body.position.y < 457 ){
     
    if(particles[1].body.position.x >330 && particles[1].body.position.x <566){
      score = score+100;
    }

  }
}

if(particles[1]){
  if(particles[1].body.position.y > 450 && particles[1].body.position.y < 457 ){
     
    if(particles[1].body.position.x >570 && particles[1].body.position.x <805){
      score = score+200;
    }

  }
}

// TO INCREASE THE SCORE FOR THE THIRD PARTICLE
if(particles[2]){
  if(particles[2].body.position.y > 450 && particles[2].body.position.y < 457 ){
     
    if(particles[2].body.position.x >10 && particles[2].body.position.x <327){
      score = score+500;
    }

  }
}

if(particles[2]){
  if(particles[2].body.position.y > 450 && particles[2].body.position.y < 457 ){
     
    if(particles[2].body.position.x >330 && particles[2].body.position.x <566){
      score = score+100;
    }

  }
}

if(particles[2]){
  if(particles[2].body.position.y > 450 && particles[2].body.position.y < 457 ){
     
    if(particles[2].body.position.x >570 && particles[2].body.position.x <805){
      score = score+200;
    }

  }
}

// TO INCREASE THE SCORE FOR THE FOURTH PARTICLE
if(particles[3]){
  if(particles[3].body.position.y > 450 && particles[3].body.position.y < 457 ){
     
    if(particles[3].body.position.x >10 && particles[3].body.position.x <327){
      score = score+500;
    }

  }
}

if(particles[3]){
  if(particles[3].body.position.y > 450 && particles[3].body.position.y < 457 ){
     
    if(particles[3].body.position.x >330 && particles[3].body.position.x <566){
      score = score+100;
    }

  }
}

if(particles[3]){
  if(particles[3].body.position.y > 450 && particles[3].body.position.y < 457 ){
     
    if(particles[3].body.position.x >570 && particles[3].body.position.x <805){
      score = score+200;
    }

  }
}

// TO INCREASE THE SCORE FOR THE FIFTH PARTICLE
if(particles[4]){
  if(particles[4].body.position.y > 450 && particles[4].body.position.y < 457 ){
     
    if(particles[4].body.position.x >10 && particles[4].body.position.x <327){
      score = score+500;
    }

  }
}

if(particles[4]){
  if(particles[4].body.position.y > 450 && particles[4].body.position.y < 457 ){
     
    if(particles[4].body.position.x >330 && particles[4].body.position.x <566){
      score = score+100;
    }

  }
}

if(particles[4]){
  if(particles[4].body.position.y > 450 && particles[4].body.position.y < 457 ){
     
    if(particles[4].body.position.x >570 && particles[4].body.position.x <805){
      score = score+200;
    }

  }
}

// TO END THE GAME
 if(turn === 5){
   gameState = "end";
 }

 if(particles[4]){
   if(particles[4].body.position.y > 510 && particles[4].body.position.y < 800){
    textSize(20);
    fill("yellow")
    textFont("Arial")
    text("GAME IS OVER. YOUR FINAL SCORE IS " + score , 200,233)
   }
 }

 // TO DISPLAY THE ARRAY AND DIVISIONS
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
     
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


// TO CREATE THE YELLOW LINE
   push();
   stroke("yellow");
   strokeWeight(4)
   line(0,450,800,450)
   pop();


}

function mousePressed(){

if(gameState!== "end" && turn < 5)
{
  particle = new Particle(mouseX,10,10,10);
  particles.push(particle);
  turn = turn+1;

}

}
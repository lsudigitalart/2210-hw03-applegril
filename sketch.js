function setup() {
   createCanvas(400, 400);
   background(106, 249, 255); 

scale(0.15);
   translate(width*6, i*3); 
 
   for(var i = 0; i <800; i++) {
		 
		ellipse(20, 20, 20);
		 
      translate(width/2, i*2);
      scale(1+i/2500); 
		  triangle(i+2, 300, 210);
      beginShape();
      vertex(width/4, height/5); 
      vertex(width*65, height); 
      vertex(40, 800); 
      endShape();
		 
		 rotate(PI/3);
		 translate(width, height);
		 scale(1+i/80000);
		 beginShape();
		 vertex(i/2, i/7);
		 vertex(width, height);
		 triangle(300, 270, 400, 30, 70, 70);
		 ellipse(40, 2, 10, 100, 100);
		 vertex(320, 30);
		 endShape();
		 
    
		 strokeWeight(2.5);
     strokeWeight(6);
     fill(75, 303, 270, 20); 
   }

}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(256);
  var sud = 0 ; 
  if ( mouseIsPressed) {
   while (sud < 50) {
    translate(mouseX - width / 2, mouseY - height / 4, 100)
    rotateX(frameCount * 0.001)
    rotateY(frameCount * 0.001)
    rotateZ(frameCount * 0.001)
    normalMaterial()
    torus(10, 2 * sud ,sud + 10)
    sud = sud + 1; 
    
    }
  } else {
     while (sud < 50) {
       // mouseX: 0 - windowWidth
       // mouseX: 0 - 200
       
       
       // windowWidth 1000
       
       
      var mappedMouseX = map(mouseX, 0, windowWidth, 0, 200);
      translate(mappedMouseX - width / 4, mouseY - height / 4, 100)
      rotateX(frameCount * 0.001)
      rotateY(frameCount * 0.001)
      rotateZ(frameCount * 0.001)
      normalMaterial()
      sphere(35, 25 * sud ,sud + 20)
      sud = sud + 1;     
    }  
  }
}
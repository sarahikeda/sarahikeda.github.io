// when it gets to the end of the line make a new line


// Emotions: {"joy":99,"sadness":0,"disgust":0,"contempt":0,"anger":0,"fear":0,"surprise":0,"valence":89,"engagement":100
// record predominant emotion and the number, initiate new bubble("joy", 100)
let bubbles = [new bubble("joy", 10), new bubble("joy", 30)]; // array to hold bubble objects

function setup() {
  createCanvas(1000, 900);
  noStroke();
}

function draw() {
  background('white');
  // create a random number of bubbles each frame
  // for (var i = 0; i < random(5); i++) {
    // bubbles.push(new bubble()); // append bubble object
  // }

  // loop through bubbles with a for..of loop
  fill(404, 11, 390, 427);
  for (let bubble of bubbles) {
    bubble.update(); // update bubble position
    bubble.display(); // draw bubble
  }
}

// bubble class
function bubble(emotion, intensity) {
  // initialize coordinates
  this.posX = 20;

  this.posY = 20;
  this.size = intensity;

  // radius of bubble spiral
  // chosen so the bubbles are uniformly spread out in area
  // this.radius = sqrt(random(pow(width / 2, 2)));
  this.radius = 2;

  this.update = function() {
    // x position follows a circle
    // let w = 0.2; // angular speed
    // let angle = w * time + this.initialangle;
    // this.posX = width / 2 + this.radius * sin(angle);
    // this.posX = 200;
    this.posX = this.posX + 5;


    if (this.posX >= 300) {
      // put bubble on a new line when it exceeds the line length
      this.posY = this.posY + 40;
      this.posX = 20;
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

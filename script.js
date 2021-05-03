let cx, cy;
let secondsRadius, minutesRadius, hoursRadius, clockDiameter;
let mouseAngle;
let v0, v1;
let font;
let fontsize = 40;
let multiplier = 30;
let s, m, h;
let henryColor = "red";
let henryFont = "Bowlby";
let marcusColor = "gray";
let marcusFont = "RobotoMono";
let benColor = "white";
let benFont = "LibreBaskerville";
let one, haha, two, three, ff, cryingblood, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, hhhhhhh;
let textLineArray = [];
let sound;
let soundTime;
var soundPlaying = false;

const playButton = document.getElementById("play");

let textLines = [
  "A clock is right four times a day. If you think about the minute hand, and the second hand. Thank you…",
  "The minute hand and the hour hand AND the second hand, it could be right SIX times a day!",
  "No— no, Kissel, no. I’m like, I’m        I dunno — literally about to start",
  "If you think about the hour, the right— so it’s two PM, then it’s… fifteen minutes… ",
  "It’s, no— they are NOT TWO SEPARATE — NO, ASSHOLE — NO NO NO — YOU CAN’T JUST SAY — NO NO NO NO — YOU CAN’T JUST — NO — YOU — ARE INCORRECT.",
  "so it could actually be right six times a day.           AND,",
  "YOU ARE THINKING ABOUT A CLOCK COMPLETELY WRONG. A TIME IS THE COORDINATION OF THE MINUTE HAND, AND THE HOUR HAND—",
  "All three of ‘em— minute, hour,",
  "And second!",
  "And second!",
  "So it can ONLY BE TWICE— ",
  "Yeah, but individually— Individually, they can also be correct.",
  "Well, no— that would mean it would be correct 24 times in a day.",
  "Why.",
  "Becau— if you’re only counting the minute hand?",
  "No, I’m not JUST counting the minute hand!",
  "I…  WANT…  TO RETIRE FROM THE PODCAST.",
  "Well, hey buddy. Wait a couple of years, then you can get whatever clock you want. I dunno what kinda—",
  "GAAAAAHHHHHH!!!"
];

function setup() {
  angleMode(DEGREES)
  createCanvas(1400, 700);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.4;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
  counter = 0;

  startingSecond = second();
  startingS = map(startingSecond, 0, 60, 0, 360) - 90;
  sound = new Audio('https://cdn.glitch.com/1683fbea-9e1e-46b2-935e-e18d09f50a62%2Fclocks_trimmed.mp3?v=1619970887174');
  sound.loop = true;
}

class textLine {
  constructor(content, y, speaker, size, controller, offset, speed) {
    switch(speaker) {
      case "ben":
      this.f = benColor
      this.font = benFont
      break;
      case "henry":
      this.f = henryColor
      this.font = henryFont
      break;
      case "marcus":
      this.f = marcusColor
      this.font = marcusFont
      break;
    }
    this.c = content;
    this.y = y;
    this.s = size;
    this.controller = controller;
    this.o = offset;
    this.multiplier = speed;
    // console.log(textLineArray)
  }

  display() {
    fill(this.f);
    noStroke();
    textFont(this.font);
    textSize(this.s);
    text(this.c, (-this.controller*this.multiplier)-this.o, this.y);
  }
}

class textLineVertical {
  constructor(content, x, speaker, size, controller, offset, speed) {
    switch(speaker) {
      case "ben":
      this.f = benColor
      this.font = benFont
      break;
      case "henry":
      this.f = henryColor
      this.font = henryFont
      break;
      case "marcus":
      this.f = marcusColor
      this.font = marcusFont
      break;
    }
    this.c = content;
    this.x = x;
    this.s = size;
    this.controller = controller;
    this.o = offset;
    this.multiplier = speed;
    // console.log(textLineArray)
  }

  display() {
    fill(this.f);
    noStroke();
    textFont(this.font);
    textSize(this.s);
    text(this.c, this.x, (-this.controller*this.multiplier)-this.o);
  }
}

function draw() {

  let soundTime = second();

  play.onclick = function() {
    if (soundPlaying) {
      sound.pause();

      play.innerText = "▸"
      soundPlaying = false;
    } else {
      sound.currentTime = soundTime;
      console.log(soundTime);
      sound.play();
      play.innerText = "▪"
      soundPlaying = true;
    }
  }

  one = new textLine(textLines[0], -20, "ben", 40, s, 5100, 65) // "A clock is right four times a day. If you think about the minute hand, and the second hand. Thank you…"

  haha = new textLineVertical('HA HA HA HA HA HA', 0, "marcus", 60, s, 3000, 60) // (MARCUS) ha ha ha ha ha
  
  two = new textLine(textLines[1], -20, "ben", 40, s, 2800, 65) //   "The minute hand and the hour hand AND the second hand, it could be right SIX times a day!"
  
  three = new textLine(textLines[2], 70, "henry", 40, s, 2000, 65) // "no... I'm about to start"

  ff = new textLine('FFF-', 0, "henry", 40, s, 1250, 65) // "FFF-"

  cryingblood = new textLine('crying blood.', 40, "henry", 100, s, 500, 65) // "crying blood"

  hhhhhhh = new textLineVertical('HHHHHHHHHHHHHH', 0, "marcus", 60, s, 3000, -60) // (MARCUS) ha ha ha ha ha

  four = new textLine(textLines[3], -20, "ben", 40, s, 0, 65) // If you think about the hour...

  five = new textLine(textLines[4], 70, "henry", 100, s, -500, 150) // THEY ARE NOT TWO SEPARATE -- YOU ARE INCORRECT

  six = new textLine(textLines[5], -20, "ben", 40, s, -2100, 65) // So it could actually be right six times a day.

  seven = new textLine(textLines[6], 300, "henry", 200, s, -14000, 260) // YOU ARE THINKING ABOUT A CLOCK COMPLETELY WRONG

  eight = new textLine(textLines[7], 120, "marcus", 60, s, -5000, 60) // (MARCUS) All three of 'em. Minute, hour-- 

  nine = new textLine(textLines[8], 120, "marcus", 70, s, -8500, 80) // MARCUS: And second!

  ten = new textLine(textLines[9], 70, "henry", 70, s, -8500, 80) // Henry: And second!

  eleven = new textLine(textLines[10], 70, "henry", 70, s, -9000, 80) // Henry: So it can ONLY BE TWICE

  twelve = new textLine(textLines[11], -20, "ben", 40, s, -10100, 80) // Ben: Yeah, but individually...

  thirteen = new textLine(textLines[12], 70, "marcus", 70, s, -16000, 120) // Marcus: Well, no-- 24 times in a day.

  fourteen = new textLine(textLines[13], 70, "ben", 400, s, -23000, 150) // Ben: WHY.

  fifteen = new textLine(textLines[14], 70, "marcus", 70, s, -18900, 120) // Marcus: you're only counting the minute hand??

  sixteen = new textLine(textLines[15], -20, "ben", 70, s, -14000, 80) // Ben: No i'm not JUSR counting the minuge hand

  seventeen = new textLine(textLines[16], 70, "henry", 70, s, -19000, 100) // Henry: i. want. to retire from the podcast.

  eighteen = new textLine(textLines[17], -20, "ben", 70, s, -16000, 80) // Ben: hey buddy... clock you want.

  nineteen = new textLine(textLines[18], 60, "henry", 400, s, -19500, 80) // Henry: GAHHHH

  twenty = new textLine("Might want to get a clock that's right more than two times a day.", -20, "ben", 70, s, -20000, 80) // Ben: might want to get a clock that's right more than two times a day.

  textLineArray = [one, haha, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, ff, cryingblood, hhhhhhh];

  angleMode(DEGREES);
  background(0);

  translate(cx, cy);

  v0 = createVector(0, cy)
  v1 = createVector(mouseX - cx, mouseY - cy)
  mouseAngle = v0.angleBetween(v1) + 90;

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract 90 degrees to make them start at the top
  s = map(second(), 0, 60, 0, 360) - 90;
  m = map(minute() + norm(second(), 0, 60), 0, 60, 0, 360) - 90;
  h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, 360 * 2) - 90;

  /// Draw the clock background//////////////////////////
  noStroke();
  // fill(244, 122, 158);
  // ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill(0);
  ellipse(0, 0, clockDiameter, clockDiameter);
  
  //display hands must be done AFTER text initialization but BEFORE text display
  displayHands();

  ///////////////////Stats/////////////////////
  //textSize(10);
  //text(nfc("mouseangle:" + mouseAngle, 3), -550, 75);
  //text("seconds:" + second().toString(), -550, 0);
  //text("counterAngle: " + nfc(counter, 3), -250, 50);
  //text(nfc("sAngle:" + s, 3), -550, 20);

  /////// Draw the minute ticks/////////////////////
  angleMode(RADIANS);
  strokeWeight(2);
  stroke(255)
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = 0 + cos(angle) * (secondsRadius + 30);
    let y = 0 + sin(angle) * (secondsRadius + 30);
    vertex(x, y);
  }
  endShape();
  angleMode(DEGREES);

  //////Display TEXTS///////////////////
  textLineArray.forEach(line => {
    line.display();
  })

  function displayHands() {
    stroke("red")
    strokeWeight(1)
    if (mouseIsPressed) {
      line(0, 0, sin(mouseAngle + 90) * secondsRadius, -cos(mouseAngle + 90) * secondsRadius);
      for (i = 0; i < textLineArray.length; i++) {
        textLineArray[i].controller = mouseAngle
      }
    } else {
      // Second Hand (normal)
      line(0, 0, 0 + cos(s) * secondsRadius, 0 + sin(s) * secondsRadius);
    }
    stroke(255)
    strokeWeight(3); // minute hand
    line(0, 0, 0 + cos(m) * minutesRadius, 0 + sin(m) * minutesRadius);
    strokeWeight(4); // hour hand
    line(0, 0, 0 + cos(h) * hoursRadius, 0 + sin(h) * hoursRadius);
  }
}


document.body.addEventListener('mousedown', e => {
  document.body.style.cursor = "grabbing"
  console.log('clickin')
});

document.body.addEventListener('mouseup', e => {
  document.body.style.cursor = "grab"
  console.log('clickout')
});
var strings = document.getElementById('myElement');
var aButton = document.getElementById('a');
var bButton = document.getElementById('b');
var cButton = document.getElementById('c');

// by default, it only adds horizontal recognizers
var mc = new Hammer(strings);
var aListener = new Hammer(aButton);
var bListener = new Hammer(bButton);
var cListener = new Hammer(cButton);

var aChord = new Audio('chords/1.mp3');
var bChord = new Audio('chords/2.mp3');
var cChord = new Audio('chords/3.mp3');

var currentChord = aChord;


// listen to events...
mc.on("panleft panright", function(e) {
    strings.textContent = e.type +" gesture detected.";
    currentChord.pause();
    currentChord.currentTime = 0;
    currentChord.play();
});

mc.on("tap press", function(e) {
   strings.textContent = e.type;
   currentChord.pause();
   currentChord.currentTime = 0;
});

aListener.on("tap press", function(e) {
   currentChord = aChord;
});

bListener.on("tap press", function(e) {
  currentChord = bChord;
});

cListener.on("tap press", function(e) {
  currentChord = cChord;
});

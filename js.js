var strings = document.getElementById('myElement');
var aButton = document.getElementById('a');
var bButton = document.getElementById('b');
var cButton = document.getElementById('c');

// by default, it only adds horizontal recognizers
var mc = new Hammer(strings);
var currentChord, aChord, bChord, cChord;
var aListener = new Hammer(aButton);
var bListener = new Hammer(bButton);
var cListener = new Hammer(cButton);

//strings.addEventListener('touchmove', function() {
//  currentChord.play();
//});
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
   if (!aChord) {
     aChord =  new Audio('chords/1.wav');
   }
   currentChord = aChord;
});

bListener.on("tap press", function(e) {
   if (!bChord) {
     bChord =  new Audio('chords/2.wav');
   }
   currentChord = bChord;
});

cListener.on("tap press", function(e) {
  if (!cChord) {
    cChord =  new Audio('chords/3.wav');
  }
  currentChord = cChord;
});

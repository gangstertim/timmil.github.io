var start = document.getElementbyId('start');
var strings = document.getElementById('myElement');
var aButton = document.getElementById('a');
var bButton = document.getElementById('b');
var cButton = document.getElementById('c');
var aChord = document.getElementById('aChord');
var bChord = document.getElementById('bChord');
var cChord = document.getElementById('cChord');

// by default, it only adds horizontal recognizers
var mc = new Hammer(strings);
var currentChord;
var aListener = new Hammer(aButton);
var bListener = new Hammer(bButton);
var cListener = new Hammer(cButton);

start.addEventListener('click', function() {
  aChord.play();
  bChord.play();
  cChord.play();
});

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

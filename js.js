var myElement = document.getElementById('myElement');

// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
var cChord = new Audio('C.mp3');
var ebChord = newAudio('Eb.mp3');

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
    cChord.play();
});

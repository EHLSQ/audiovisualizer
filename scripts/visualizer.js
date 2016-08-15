var audioBuffer = null;
var myAudio = document.querySelector('audio');
var canvas = document.querySelector('.visualizer');
var canvasCtx = canvas.getContext("2d");

WIDTH = canvas.width;
HEIGHT = canvas.height;

// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
// analyser.getByteTimeDomainData(dataArray);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  var barWidth = (WIDTH / bufferLength) * 5;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i+=4) {
    barHeight = dataArray[i] * 1;
    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ', ' + (barHeight) + ' , 0 )';
    canvasCtx.fillRect(x, HEIGHT-barHeight/2, barWidth, barHeight/2);

    x += barWidth + 1;
  }
};

draw();

var source = audioCtx.createMediaElementSource(myAudio);

source.connect(analyser);
analyser.connect(audioCtx.destination)

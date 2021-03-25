var mp3 ='http://Elinaref.github.io/elina-arthur/dist/audio/181068__lolamadeus__zombie-vocals-grunts.wav';
// let player = new Tone.Player(mp3).toMaster();
// Tone.loaded().then(() => {
// 	player.start();
// });

var player = new Tone.Player(mp3, () => {
  document.querySelectorAll("button").forEach((e) => (e.disabled = false));
  document.querySelector("#loading").textContent = "";
  document.querySelector("#loading").insertAdjacentHTML("beforeend", "loaded");
}).toMaster();

player.loop = true;
player.playbackRate = 1;
document
  .querySelector("#start")
  .addEventListener("click", () => player.start());
document.querySelector("#stop").addEventListener("click", () => player.stop());
document.querySelector("#pbrS").addEventListener(
  "input",
  (e) => {
    let val = e.currentTarget.value;
    document.querySelector("#pbrO").value = val;
    // player.playbackRate = val;
  },
  false
);

// function play() {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "snoring.mp3", true);
// 	xhr.responseType = 'blob';
// 	xhr.onload = function(){
// 		var blob = URL.createObjectURL(this.response);
// 		console.log('pressed');
// 		var player = new Tone.Player();
// 		var pitchShift = new Tone.PitchShift({pitch: 2});
// 		player.load(blob);
// 		pitchShift.toMaster();
// 		player.connect(pitchShift);
// 		player.autostart = true;
// 	};
// 	xhr.send();
// }

function processCommand(serial_cmd) {
  const val = serial_cmd / 512; // 512 is half of 1024
  player.playbackRate = val; // between 0-2

  if (serial_cmd > 800) {
  
  } else if (serial_cmd < 800) {
  }
}

window.onload = () => {
  console.log("loaded");
  //play();
};

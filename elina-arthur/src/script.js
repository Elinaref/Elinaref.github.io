const mp3 = 'https://www.mfiles.co.uk/mp3-downloads/waltz-op18-grande-brillante.mp3';
let player = new Tone.Player(mp3, ()=> {
  document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading').textContent = '';
  document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
}).toMaster();
player.playbackRate = 1;
document.querySelector('#start').addEventListener('click', ()=> player.start());
document.querySelector('#stop').addEventListener('click', ()=> player.stop());
document.querySelector('#pbrS').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#pbrO').value = val;
  player.playbackRate = val;
}, false)
console.log('hi');
const synth = new Tone.PolySynth({
    oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 0.8,
        decay: 0,
        sustain: 0.8,
        release: 5
      }
  }).toMaster();

console.log(synth);

function synthFuck() {
  console.log('fire')
  let randomOct = Math.floor((Math.random() * 4) + 1);
  let notes = ['A', 'D', 'C', 'E', 'C']
  let note = notes[randomOct] + randomOct;
  console.log(note);
  let now = Tone.now();
  synth.triggerAttackRelease([note, "C2", "A4", "D1"], "4n", now);
}

setInterval(synthFuck, 1000);
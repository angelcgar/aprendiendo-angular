interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 300,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: mysong,
  details: { author: anotherAuthor },
} = audioPlayer;



console.log({  mysong, anotherAuthor });

console.log(`esto es ${audioPlayer.audioVolume}`);

// Desestructuracion de arreglos

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta']

console.log('veamos a ' + trunks);

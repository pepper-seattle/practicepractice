import React from 'react';

export const styles = {
  card: {
    backgroundColor: '#2C3646',
    border: '2px solid #000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',
    width: '64px',
    margin: '0 16px 16px',
    textAlign: 'center',
  },
  drum: {
    color: '#d3d3d3',
    fontSize: 12,
    margin: '4px 0 0',
  },
  letter: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  },
  cardRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 24,
  }
};

export const DrumCards = () => {
  const keyCards = [
    {
      drumPiece: 'boom',
      key: 65,
      letter: 'A',
      audioSrc: 'audio/boom2.wav'
    },
    {
      drumPiece: 'clap',
      key: 83,
      letter: 'S',
      audioSrc: 'audio/clap.wav'
    },
    {
      drumPiece: 'hihat',
      key: 68,
      letter: 'D',
      audioSrc: 'audio/hihat.wav'
    },
    {
      drumPiece: 'kick',
      key: 70,
      letter: 'F',
      audioSrc: 'audio/kick.wav'
    },
    {
      drumPiece: 'openhat',
      key: 71,
      letter: 'G',
      audioSrc: 'audio/openhat.wav'
    },
    {
      drumPiece: 'ride',
      key: 72,
      letter: 'H',
      audioSrc: 'audio/ride.wav'
    },
    {
      drumPiece: 'snare',
      key: 74,
      letter: 'J',
      audioSrc: 'audio/snare.wav'
    },
    {
      drumPiece: 'tink',
      key: 75,
      letter: 'K',
      audioSrc: 'audio/tink.wav'
    },
    {
      drumPiece: 'tom',
      key: 76,
      letter: 'L',
      audioSrc: 'audio/tom.wav'
    },
  ];

  return (
    <div style={styles.cardRow}>
      {keyCards.map(card => {
        return (
        <div style={styles.card} data-key={card.key} key={card.key}>
          <p style={styles.letter}>{card.letter}</p>
          <p style={styles.drum}>{card.drumPiece}</p>
          <audio data-key={card.key}>
            <source data-key={card.key} src={card.audioSrc} type="audio/wav" />
          </audio>
        </div>
        );
      })}
    </div>
  )
};

export default DrumCards;
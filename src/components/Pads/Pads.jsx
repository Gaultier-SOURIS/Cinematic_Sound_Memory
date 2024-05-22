import './Pads.scss';
import { useState, useEffect } from 'react';
import western from '../../data/western';

export default function Pads({ currentImageId, startedGame }) {
  const [shuffledSounds, setShuffledSounds] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [message, setMessage] = useState('');

  const handleBorderColor = (e) => {
    e.target.classList.add('active');
    setTimeout(() => {
      e.target.classList.remove('active');
    }, 250);
  };

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffled = shuffleArray([...western]);
    setShuffledSounds(shuffled);
  }, []);

  const playSound = (sound, id) => {
    if (startedGame) {
      if (id === currentImageId) {
        console.log('Réussite!');
        setMessage('Réussite!');
      } else {
        console.log('raté !!!');
        setMessage('raté !!!');
      }
    } else {
      if (currentSound) {
        currentSound.pause();
        setCurrentSound(null);
      }
      const audio = new Audio(sound);
      setCurrentSound(audio);
      audio.play();
    }
  };

  const pads = [];
  for (let i = 0; i < 9; i++) {
    pads.push(
      <button
        type="button"
        className="pad"
        id={`pad-${i}`}
        key={i}
        onClick={() =>
          playSound(shuffledSounds[i]?.sound, shuffledSounds[i]?.id)
        }
        onMouseDown={handleBorderColor}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="pads-container">
      {pads}
      {message && <div className="success-message">{message}</div>}
    </div>
  );
}

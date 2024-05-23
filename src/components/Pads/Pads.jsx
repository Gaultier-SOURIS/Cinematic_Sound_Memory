import './Pads.scss';
import { useState, useEffect } from 'react';
import western from '../../data/western';

export default function Pads({
  currentImageId,
  startedGame,
  onNextImage,
  // setCurrentIndex,
  // currentIndex,
}) {
  const [shuffledSounds, setShuffledSounds] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [message, setMessage] = useState('');
  // console.log('currentIndex', currentIndex);

  const handleBorderColor = (e) => {
    e.target.classList.add('active');
    setTimeout(() => {
      e.target.classList.remove('active');
    }, 250);
  };

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffled = shuffleArray([...western]);
    setShuffledSounds(shuffled);
  }, []); // Se mélangent une seule fois lors de l'initialisation

  const playSound = (sound, id) => {
    if (startedGame) {
      console.log('touche appuyé', id);
      if (id === currentImageId) {
        console.log('id', id);
        console.log('currentImageId', currentImageId);

        console.log('Réussite!');
        setMessage('Réussite!');
        // setCurrentIndex((prevIndex) => prevIndex + 1);
        // console.log('currentIndex', currentIndex);
        onNextImage();
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

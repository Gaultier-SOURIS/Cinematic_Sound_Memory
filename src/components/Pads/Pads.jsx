import './Pads.scss';
import { useState, useEffect } from 'react';
import StartBtn from '../Buttons/StartBtn';
import RetryBtn from '../Buttons/RetryBtn';
import western from '../../data/western';

export default function Pads({
  currentImageId,
  startedGame,
  setStartedGame,
  onNextImage,
  setMessage,
  setCount,
  currentIndex,
}) {
  const [shuffledSounds, setShuffledSounds] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [_, setShowImage] = useState(true);

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
  }, []);

  const playSound = (sound, id) => {
    if (startedGame) {
      if (id === currentImageId) {
        setCount((prevCount) => prevCount + 1);
        setMessage('Bien joué');
        setShowImage(false);
        setTimeout(() => {
          setMessage('');
          setShowImage(true);
          onNextImage();
        }, 500);
      } else {
        setCount((prevCount) => prevCount + 1);
        setMessage('dommage');
        setShowImage(false);
        setTimeout(() => {
          setMessage('');
          setShowImage(true);
        }, 500);
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
      >
        {i + 1}
      </button>
    );
  }

  return currentIndex < western.length ? (
    <div className="pads">
      <div className="pads__container">{pads}</div>
      {!startedGame ? (
        <div className="btn-container">
          <StartBtn setStartedGame={setStartedGame} />
        </div>
      ) : (
        <div className="btn-container">
          <RetryBtn />
        </div>
      )}
    </div>
  ) : (
    <div className="finish">
      <div className="btn-container">
        <RetryBtn />
      </div>
    </div>
  );
}

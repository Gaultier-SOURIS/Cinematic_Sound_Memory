import './Pads.scss';
import { useState, useEffect } from 'react';
import western from '../../data/western';
import YesBtn from '../Buttons/YesBtn';
import NoBtn from '../Buttons/NoBtn';

export default function Pads({
  currentImageId,
  startedGame,
  onNextImage,
  setMessage,
  setCount,
  currentIndex,
}) {
  const [shuffledSounds, setShuffledSounds] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [_, setShowImage] = useState(true);
  // const handleBorderColor = (e) => {
  //   e.target.classList.add('active');
  //   setTimeout(() => {
  //     e.target.classList.remove('active');
  //   }, 250);
  // };

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
        setMessage('Dommage');
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
        // onMouseDown={handleBorderColor}
      >
        {i + 1}
      </button>
    );
  }

  // Only render the pads if the game is ongoing
  return currentIndex < western.length ? (
    <div className="pads-container">{pads}</div>
  ) : (
    <div className="btn-container">
      <p className="btn-container__continue">Une autre partie ?</p>
      <div className="btn-container__btn">
        <YesBtn />
        <NoBtn />
      </div>
    </div>
  );
}

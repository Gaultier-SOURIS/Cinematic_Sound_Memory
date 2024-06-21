import './Game.scss';
import { useState } from 'react';
import GameScreen from '../GameScreen/GameScreen';
import Pads from '../Pads/Pads';
import StartingScreen from '../StartingScreen/StartingScreen';

export default function Game() {
  const [startedGame, setStartedGame] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="game">
      <div className="game__container">
        {startedGame ? (
          <GameScreen
            setCurrentImageId={setCurrentImageId}
            currentIndex={currentIndex}
            message={message}
            count={count}
          />
        ) : (
          <StartingScreen />
        )}

        <Pads
          startedGame={startedGame}
          setStartedGame={setStartedGame}
          currentImageId={currentImageId}
          onNextImage={handleNextImage}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          message={message}
          setMessage={setMessage}
          setCount={setCount}
        />
      </div>
    </div>
  );
}

import './Main.scss';
import { useState } from 'react';
import GameScreen from '../GameScreen/GameScreen';
import Pads from '../Pads/Pads';
import StartBtn from '../Buttons/StartBtn';
import StartingScreen from '../StartingScreen/StartingScreen';

export default function Main() {
  const [startedGame, setStartedGame] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="main">
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
        currentImageId={currentImageId}
        onNextImage={handleNextImage}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        message={message}
        setMessage={setMessage}
        setCount={setCount}
      />
      {!startedGame && (
        <div className="startBtn-container">
          <StartBtn setStartedGame={setStartedGame} />
        </div>
      )}
    </div>
  );
}

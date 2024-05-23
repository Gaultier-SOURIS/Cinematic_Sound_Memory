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

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="main">
      {startedGame ? (
        <GameScreen
          setCurrentImageId={setCurrentImageId}
          currentIndex={currentIndex}
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
      />
      <StartBtn setStartedGame={setStartedGame} />
    </div>
  );
}

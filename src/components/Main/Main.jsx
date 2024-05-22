import './Main.scss';
import { useState } from 'react';
import GameScreen from '../GameScreen/GameScreen';
import StartBtn from '../Buttons/StartBtn';
import Pads from '../Pads/Pads';
import StartingScreen from '../StartingScreen/StartingScreen';

export default function Main() {
  const [currentImageId, setCurrentImageId] = useState(null);
  const [startedGame, setStartedGame] = useState(false);
  return (
    <div className="main">
      {startedGame ? (
        <GameScreen setCurrentImageId={setCurrentImageId} />
      ) : (
        <StartingScreen />
      )}

      <Pads currentImageId={currentImageId} startedGame={startedGame} />

      <StartBtn setStartedGame={setStartedGame} />
    </div>
  );
}

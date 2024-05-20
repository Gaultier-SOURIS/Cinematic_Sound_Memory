import './Main.scss';
import Pads from '../Pads/Pads';
import GameScreen from '../GameScreen/GameScreen';
import StartBtn from '../Buttons/StartBtn';

export default function Main() {
  return (
    <div className="main">
      <GameScreen />
      <Pads />
      <StartBtn />
    </div>
  );
}

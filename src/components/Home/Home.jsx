import './Home.scss';
import Presentation from '../Presentation/Presentation';
import GameRule from '../GameRule/GameRule';

export default function Home() {
  const scrollTo = (pixelCount) => {
    window.scrollTo({
      top: pixelCount,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Presentation onRulesClick={scrollTo} />
      <div>
        <GameRule onGameClick={scrollTo} />
      </div>
    </div>
  );
}

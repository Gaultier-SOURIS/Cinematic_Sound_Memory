import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Game from '../Game/Game';
import Home from '../Home/Home';

function App() {
  const scrollTo = (pixelCount) => {
    window.scrollTo({
      top: pixelCount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <NavBar
        onRulesClick={scrollTo}
        onGameClick={scrollTo}
        onPresentationClick={scrollTo}
      />
      <Routes>
        <Route path="/" element={<Home onPresentationClick={scrollTo} />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

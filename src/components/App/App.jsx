import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Game from '../Game/Game';
import Home from '../Home/Home';
import ThemeSelection from '../ThemeSelection/ThemeSelection';

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
        <Route path="/themeSelection" element={<ThemeSelection />} />

        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

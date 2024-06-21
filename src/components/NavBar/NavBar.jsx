import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar({ onRulesClick }) {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="navBar__mainTitle">Cinematic Sound Memory</h1>
      </Link>

      <div className="navBar__links">
        <Link
          to="/"
          onClick={() => {
            onRulesClick(0);
          }}
        >
          Accueil
        </Link>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: 275, behavior: 'smooth' });
            }, 0);
          }}
        >
          Règle du jeu
        </Link>
        <Link
          to="/game"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
          }}
        >
          Jeu
        </Link>
      </div>
    </div>
  );
}

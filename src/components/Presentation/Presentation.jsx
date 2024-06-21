import './Presentation.scss';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import DestinationGameBtn from '../Buttons/DestinationGameBtn';

export default function Presentation({ onRulesClick }) {
  return (
    <div className="presentation">
      <div className="presentation__container">
        <p className="presentation__text">
          Teste ta mémoire avec ce petit jeu de mémorie sonore.
        </p>
        <Link to="/game">
          <DestinationGameBtn />
        </Link>
        <p className="presentation__text">
          Mais avant tout prends le temps de lire les règles du jeu.
        </p>
        <button
          type="button"
          className="presentation__arrowDown"
          onClick={(e) => {
            e.preventDefault();
            onRulesClick(585);
          }}
        >
          {' '}
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}

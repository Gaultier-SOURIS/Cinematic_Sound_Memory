import './ThemeSelection.scss';
import { Link } from 'react-router-dom';
import ChoicesBtn from '../Buttons/ChoicesBtn';

export default function ThemeSelection() {
  return (
    <div className="themeSelection">
      <div className="themeSelection__container">
        <h1 className="themeSelection__title">Choisis ton thème</h1>
        <Link to="/game">
          <div className="themeSelection__choices">
            <ChoicesBtn />
          </div>
        </Link>
      </div>
    </div>
  );
}

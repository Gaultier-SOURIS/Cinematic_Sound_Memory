import './RetryBtn.scss';
import { Link } from 'react-router-dom';

export default function RetryBtn() {
  return (
    <div className="retryBtn">
      <Link to="/themeSelection">
        <button className="startBtn__btn" type="button">
          Recommencer
        </button>
      </Link>
    </div>
  );
}

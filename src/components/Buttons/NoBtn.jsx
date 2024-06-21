import './NoBtn.scss';
import { Link } from 'react-router-dom';

export default function NoBtn() {
  return (
    <div>
      <Link to="/">
        <button className="noBtn" type="button">
          Non
        </button>
      </Link>
    </div>
  );
}

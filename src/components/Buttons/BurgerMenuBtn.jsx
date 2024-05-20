import './BurgerMenuBtn.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function BurgerMenuBtn() {
  return (
    <div className="BurgerMenuBtn">
      <GiHamburgerMenu className="BurgerMenuBtn__icon" />
    </div>
  );
}

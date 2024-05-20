import './NavBar.scss';
import BurgerMenuBtn from '../Buttons/BurgerMenuBtn';

export default function NavBar() {
  return (
    <div className="navBar">
      <BurgerMenuBtn />
      <h1 className="navBar__mainTitle">Cinematic Sound Memory</h1>
    </div>
  );
}

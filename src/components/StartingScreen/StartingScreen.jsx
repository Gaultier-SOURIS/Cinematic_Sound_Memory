import './StartingScreen.scss';

export default function StartingScreen() {
  return (
    <div className="startingScreen">
      <div className="startingScreen__container">
        <p className="startingScreen__message">Mémorise bien les sons.</p>
        <p className="startingScreen__message">Et quand tu es pret...</p>
        <p className="startingScreen__message">Lances le jeu !</p>
      </div>
    </div>
  );
}

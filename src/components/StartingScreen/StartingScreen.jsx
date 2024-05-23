import './StartingScreen.scss';

export default function StartingScreen() {
  return (
    <div className="startingScreen">
      <p className="screen__message">
        1. Ecoutes les sons en appuyant sur les touches, et memorises les bien !
      </p>
      <p className="screen__message">
        2. quand tu appuies sur start, des images vont appraitre.
      </p>
      <p className="screen__message">
        3. Souviens toi du son qui correspond a l'image et appuie sur le bon
        bouton.
      </p>
    </div>
  );
}

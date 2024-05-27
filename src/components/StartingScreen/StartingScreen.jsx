import './StartingScreen.scss';

export default function StartingScreen() {
  return (
    <div className="startingScreen">
      <p className="screen__message">
        1. Écoute les sons en appuyant sur les touches et mémorise-les bien.
      </p>
      <p className="screen__message">
        2. Lorsque tu appuies sur "Start", des images apparaîtront.
      </p>
      <p className="screen__message">
        3. Rappelle-toi du son correspondant à chaque image et appuie sur la
        bonne touche.
      </p>
    </div>
  );
}

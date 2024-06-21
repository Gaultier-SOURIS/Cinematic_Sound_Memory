import './GameRule.scss';

export default function GameRule() {
  return (
    <div className="gameRule">
      <div className="gameRule__container">
        <div className="gameRule__container-titles">
          <h1 className="gameRule__title">Règle du jeu</h1>
          <h2 className="gameRule__subtitle">But du jeu :</h2>
          <p className="gameRule__text">
            Trouve tous les sons qui correspondent aux images en moins d'essais
            possible.
          </p>
          <h2 className="gameRule__subtitle">Instructions :</h2>
        </div>

        <div className="gameRule__instructions-container">
          <div className="gameRule__instructions-container-left">
            <p className="gameRule__text">
              il y'a 9 pads, chacun à un son différent.
            </p>
            <p className="gameRule__text">Mémorises chaque son.</p>
            <p className="gameRule__text">
              appuie sur le bouton "Commence le jeu".
            </p>
            <p className="gameRule__text">une image apparait.</p>
            <p className="gameRule__text">
              trouves le son qui correspond à l'image.
            </p>
            <p className="gameRule__text">
              si c'est bon, tu passes à l'image suivante.
            </p>
            <p className="gameRule__text">sinon tu peux reassayer.</p>
            <p className="gameRule__text">Bon jeu a toi.</p>
          </div>
          <div className="gameRule__instructions-container-right">
            <div className="gameRule__img-container">
              <img src="/western/img/indien.jpg" alt="" />
            </div>
            <div className="gameRule__img-container">
              <img src="/img/img_pad.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import './GameScreen.scss';
import western from '../../data/western';
import RetryBtn from '../Buttons/RetryBtn';

export default function GameScreen({
  setCurrentImageId,
  currentIndex,
  message,
  count,
}) {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [showImage, _] = useState(true);

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffledArray = shuffleArray(western);
    setShuffledImages(shuffledArray);
    setCurrentImageId(shuffledArray[0].id);
  }, [setCurrentImageId]);

  useEffect(() => {
    if (shuffledImages.length > 0 && currentIndex < shuffledImages.length) {
      setCurrentImageId(shuffledImages[currentIndex].id);
    }
  }, [currentIndex, shuffledImages, setCurrentImageId]);

  const renderEndMessage = () => {
    if (count === 9) {
      return 'Bravo, vous avez Tout réussi du premier coup !';
    }
    return `Bravo, vous avez fini le jeu en ${count} essais !`;
  };

  return (
    <div className="gameScreen">
      <div className="gameScreen__container">
        {message ? (
          <div className="gameScreen__message">{message}</div>
        ) : showImage && currentIndex < shuffledImages.length ? (
          <img
            className="gameScreen__img"
            src={shuffledImages[currentIndex].image}
            alt="game"
          />
        ) : (
          <div className="gameScreen__endMessage-container">
            <div className="gameScreen__endMessage">{renderEndMessage()}</div>
            <div className="gameScreen__endMessage-btn">
              <RetryBtn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

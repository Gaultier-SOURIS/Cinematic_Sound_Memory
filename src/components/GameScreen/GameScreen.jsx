import { useState, useEffect } from 'react';
import './GameScreen.scss';
import western from '../../data/western';

export default function GameScreen({ setCurrentImageId, currentIndex }) {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [showImage, setShowImage] = useState(true);

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

  return (
    <div className="gameScreen">
      {currentIndex < shuffledImages.length ? (
        showImage && (
          <img
            className="gameScreen__img"
            src={shuffledImages[currentIndex].image}
            alt="game"
          />
        )
      ) : (
        <div>Bravo, vous avez fini le jeu!</div>
      )}
    </div>
  );
}

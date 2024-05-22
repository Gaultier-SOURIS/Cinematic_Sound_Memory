import './GameScreen.scss';
import { useState, useEffect } from 'react';
import western from '../../data/western';

export default function GameScreen({ setCurrentImageId }) {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffled = shuffleArray([...western]);
    const selectedImage = shuffled[0];
    setCurrentImage(selectedImage);
    setCurrentImageId(selectedImage.id);
  }, [setCurrentImageId]);

  return (
    <div className="gameScreen">
      {currentImage && (
        <img
          className="gameScreen__img"
          src={currentImage.image}
          alt="ecran du jeu"
        />
      )}
    </div>
  );
}

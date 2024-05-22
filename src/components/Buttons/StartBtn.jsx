import './StartBtn.scss';

export default function StartBtn({ setStartedGame }) {
  const handleStartedGame = () => {
    console.log('Game started!');
    setStartedGame(true);
  };

  const handleBorderColor = (e) => {
    e.target.classList.add('active');
    setTimeout(() => {
      e.target.classList.remove('active');
    }, 250);
  };

  return (
    <div className="startBtn">
      <button
        className="startBtn__btn"
        type="button"
        onClick={handleStartedGame}
        onMouseDown={handleBorderColor}
      >
        Start
      </button>
    </div>
  );
}

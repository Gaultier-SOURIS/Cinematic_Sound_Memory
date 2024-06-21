import './RetryBtn.scss';

export default function RetryBtn() {
  const handleReset = () => {
    window.location.href = '/game';
  };

  return (
    <div className="retryBtn">
      <button className="startBtn__btn" type="button" onClick={handleReset}>
        Recommencer
      </button>
    </div>
  );
}

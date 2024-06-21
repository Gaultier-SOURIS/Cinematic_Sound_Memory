import './YesBtn.scss';

export default function YesBtn() {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div>
      <button className="yesBtn" type="button" onClick={handleReset}>
        Oui
      </button>
    </div>
  );
}

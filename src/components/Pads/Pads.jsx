import './Pads.scss';

export default function Pads() {
  const pads = [];

  for (let i = 0; i < 9; i++) {
    pads.push(
      <button type="button" className="pad" id={`pad-${i}`} key={i}>
        {i + 1}
      </button>
    );
  }

  return <div className="pads-container">{pads}</div>;
}

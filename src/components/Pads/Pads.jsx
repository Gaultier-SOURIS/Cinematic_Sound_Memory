import './Pads.scss';

export default function Pads() {
  const pads = [];

  for (let i = 0; i < 9; i++) {
    pads.push(
      <div className="pad" id={`pad-${i}`} key={i}>
        {i + 1}
      </div>
    );
  }

  return <div className="pads-container">{pads}</div>;
}

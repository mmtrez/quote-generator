export default function RandomButton({onClick}: {onClick: () => void}) {
  return (
    <button type="button" className="random-button" onClick={onClick}>
      random
      <span className="material-symbols-outlined">autorenew</span>
    </button>
  );
}

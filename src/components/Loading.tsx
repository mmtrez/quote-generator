import spinner from '../assets/loading.gif';

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={spinner} alt="loading ..." />
    </div>
  );
}

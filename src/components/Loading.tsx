import spinner from '../assets/loading.gif';
import './Loading.scss';

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={spinner} alt="loading ..." />
    </div>
  );
}

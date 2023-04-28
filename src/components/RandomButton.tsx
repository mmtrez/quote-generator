import {useContext} from 'react';
import Context from '../Context';
import {useNavigate, useLocation} from 'react-router-dom';

export default function RandomButton() {
  const {run} = useContext(Context);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const handleGetRandom = () => {
    if (pathname !== '/') {
      navigate('/');
    } else run('/quotes/random');
  };
  return (
    <button type="button" className="random-button" onClick={handleGetRandom}>
      random
      <span className="material-symbols-outlined">autorenew</span>
    </button>
  );
}

import {Link} from 'react-router-dom';
import {Quote} from '../types';

export default function Card({
  data,
  onClick,
}: {
  data: Quote;
  onClick: () => void;
}) {
  return (
    <>
      <main className="card-container">
        <p className="quote">{data.quoteText}</p>
        <Link
          to="/author"
          role="button"
          className="info-container"
          onClick={onClick}
        >
          <div className="info">
            <p className="autor">{data.quoteAuthor}</p>
            <p className="genre">{data.quoteGenre}</p>
          </div>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </Link>
      </main>
    </>
  );
}

import {useContext, useEffect} from 'react';
import Context from '../Context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import Error from '../components/Error';
import {Link} from 'react-router-dom';

export default function RandomPage() {
  const {isLoading, data, error, run} = useContext(Context);
  useEffect(() => {
    run('/quotes/random');
  }, [run]);
  return (
    <main>
      {!isLoading && data && (
        <>
          <Card data={data[0]} />
          <Link
            to={`/author/${data[0].quoteAuthor}`}
            role="button"
            className="info-container"
          >
            <div className="info">
              <p className="autor">{data[0].quoteAuthor}</p>
              <p className="genre">{data[0].quoteGenre}</p>
            </div>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </>
      )}
      {isLoading && <Loading />}
      {!isLoading && error && <Error message={error} />}
    </main>
  );
}

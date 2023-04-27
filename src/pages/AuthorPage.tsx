import {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Context from '../Context';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function AuthorPage() {
  const {isLoading, data, error, run} = useContext(Context);
  const {name} = useParams();

  useEffect(() => {
    run(`/quotes?author=${name}`);
  }, [run, name]);

  return (
    <main>
      {!isLoading && data && (
        <>
          <h1>{name}</h1>
          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </>
      )}
      {isLoading && <Loading />}
      {!isLoading && error && <Error message={error} />}
    </main>
  );
}

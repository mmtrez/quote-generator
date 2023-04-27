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
    console.log('AUTHOR PAGE');
  }, [run, name]);

  return (
    <>
      {!isLoading && data && <Card data={data[0]} />}
      {isLoading && <Loading />}
      {!isLoading && error && <Error message={error} />}
    </>
  );
}

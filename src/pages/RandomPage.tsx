import {useContext, useEffect} from 'react';
import Context from '../Context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import Error from '../components/Error';

export default function RandomPage() {
  const {isLoading, data, error, run} = useContext(Context);
  useEffect(() => {
    run('/quotes/random');
    console.log('here');
  }, [run]);
  return (
    <>
      {!isLoading && data && <Card data={data[0]} />}
      {isLoading && <Loading />}
      {!isLoading && error && <Error message={error} />}
    </>
  );
}

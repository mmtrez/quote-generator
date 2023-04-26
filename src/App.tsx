import Card from './components/Card';
import RandomButton from './components/RandomButton';
import './App.scss';
import useAsync from './useAsync';
import {useCallback, useEffect, useState} from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const {isLoading, error, data, run} = useAsync();
  const handleRandom = useCallback(() => {
    run('/quotes/random');
  }, [run]);

  const handleByAuthor = useCallback(() => {
    run('/quotes', {author: 'Alice Walker'});
  }, [run]);

  useEffect(() => handleRandom, [handleRandom]);

  return (
    <div className="app-container">
      <RandomButton onClick={handleRandom} />
      {!isLoading &&
        data &&
        data.map((item) => <Card data={item} onClick={handleByAuthor} />)}
      {isLoading && <Loading />}
      {!isLoading && error && <Error message={error} />}
    </div>
  );
}

export default App;

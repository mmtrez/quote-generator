import {Routes, Route} from 'react-router-dom';
import RandomPage from './pages/RandomPage';
import AuthorPage from './pages/AuthorPage';
import RandomButton from './components/RandomButton';
import './style.scss';

function App() {
  return (
    <div className="app-container">
      <RandomButton />
      <Routes>
        <Route path="/" element={<RandomPage />} />
        <Route path="/author/:name" element={<AuthorPage />} />
      </Routes>
    </div>
  );
}

export default App;

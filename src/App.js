import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import MovieDetail from './pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className='App'>
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

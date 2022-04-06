import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;

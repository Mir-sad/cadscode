import { Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Concepts from './components/Concepts';
import Cards from './components/Cards';
import Infos from './components/Infos';
import Testimonials from './components/Testimonials';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Concepts/>
      <Cards/>
      <Infos/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;

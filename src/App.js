import './App.css';
import Footer from './Components/Header/Footer';
import Header from './Components/Header/Header';
import Caraousol from './Components/Header/Home/Caraousol';
import Founder from './Components/Header/Home/Founder';
import GetStarted from './Components/Header/Home/GetStartes';
import Hero from './Components/Header/Home/Hero';
import KeyProblem from './Components/Header/Home/KeyProblem';
import Review from './Components/Header/Home/Review';
import Target from './Components/Header/Home/Target';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <KeyProblem />  
    <Review />
    <Caraousol />
    <Target />
    <Founder />
    <GetStarted />
    <Footer />
    </div>
  );
}

export default App;

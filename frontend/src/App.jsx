import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Popular from './components/popular/Popular';
import './normalize.css';
import './App.css';
import Telegram from './components/telegram/Telegram';
import Environment from './components/environment/Environment';
import Studio from './components/studio/Stuido';

function App() {
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Popular />
        <Telegram />
        <Environment />
        <Studio />
      </main>
      <Footer />
    </>
  );
}

export default App;

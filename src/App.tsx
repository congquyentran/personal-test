import logo from './assets/images/logo.svg';
import Header from './components/Header/Header';
import background from './assets/images/background.svg';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Footer />
    </div>
  );
}

export default App;

import { content } from './content';
import { NewsSection } from './components/NewsSection';
import logo from './assets/logo-news-anytime.svg';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <img src={logo} className="app-logo" ></img>
      </header>
      <NewsSection />
      <Main />
    </div>
  );
}

export default App;

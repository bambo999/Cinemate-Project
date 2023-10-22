import './App.css';
import {AllRoute} from '../src/routes/AllRoute';
import {Header, Footer} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;

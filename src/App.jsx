import './App.css';

import CurrencyCard from './components/CurrencyCard';
import Header from './components/Header';

const App = () => {
  return (    
    <div className="App">
      <Header></Header>
      <CurrencyCard></CurrencyCard>
    </div>    
  );
}

export default App;

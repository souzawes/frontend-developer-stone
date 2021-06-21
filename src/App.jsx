import './App.css';

import { useState } from 'react';

import CurrencyCard from './components/CurrencyCard';
import Header from './components/Header';
import ResultCard from './components/ResultCard';

const App = () => {
  const [result, setResult] = useState(false);
  
  return (    
    <div className="App">
      <Header></Header>
      {result ? <ResultCard></ResultCard> : <CurrencyCard></CurrencyCard>}      
    </div>    
  );
}

export default App;

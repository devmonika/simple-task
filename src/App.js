
import { useEffect, useState } from 'react';
import './App.css';
import Button from './Component/Button';
import axios from 'axios';

function App() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    const res = await axios.get('https://catfact.ninja/fact');
    setFact(res.data.fact);
  };

  const handleRefreshClick = () => {
    fetchFact();
  };
  return (
    <div className="App">
      <h1>Cat Fact:</h1>
      <p>{fact}</p>
      <Button handleRefreshClick={handleRefreshClick}></Button>
    </div>
  );
}

export default App;

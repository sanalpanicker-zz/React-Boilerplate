import MaterialIcon from 'material-icons-react';

import Component1 from './components/Component1';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1/>
        <p>
        Coinbase <MaterialIcon icon="code" color="white"/> Round
        </p>
        
      </header>
    </div>
  );
}

export default App;

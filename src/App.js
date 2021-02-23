import logo from './logo.svg';
import './App.css';

function App() {
  let person ={
    name:  'Dr. Dinesh Chandraw',
    job: 'Poim'
  }
  let person2 = {
    name: 'Eva Hasan',
    job: 'Singer'
  }
  let style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3 style={style}>{person.name + ' ' + person.job}</h3>
        <h3 style={style}>{person2.name + ' ' + person2.job}</h3>
        
      </header>
    </div>
  );
}

export default App;

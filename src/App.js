import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FetchExample from './components/FetchExample';
import CoustomFetchExample from './components/CoustomFetchExample';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <FetchExample />
      <hr></hr>
      <CoustomFetchExample />
    </div>
  );
}

export default App;

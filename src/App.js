/* eslint-disable react/prefer-stateless-function */
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;

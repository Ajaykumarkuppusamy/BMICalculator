import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(25);
  const [bmi, setBmi] = useState(25);
  const [message, setMessage] = useState('?!');

  const Calculate = () => {
    if (height < 100 || height > 220) {
      alert('Height should be between 100cm and 220cm');
      setHeight(100);
      return;
    }

    if (weight < 25 || weight > 180) {
      alert('Weight should be between 25kg and 180kg');
      setWeight(25);
      return ;
    }

    const bmiValue = weight / ((height / 100) * (height / 100));
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obese');
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form>
        <div className="parent">
          <div>
            <label className='labels'>Height(cm)</label>
            <input className='inputs' type="number" name="height" id="height" required value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label className='labels'>Weight(kg)</label>
            <input className='inputs' type="number" name="weight" id="weight" required value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <button className='button' type="button" onClick={Calculate}>Calculate BMI</button>
          </div>
        </div>
      </form>
      <div>
        <h2>Your BMI is</h2>
        <div className="results">{bmi}</div>
        <p>Comment: You are <span className='comments'>{message}</span></p>
      </div>
    </div>
  );
}

export default App;

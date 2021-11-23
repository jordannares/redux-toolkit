import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increaseAmount, increment } from './redux/slices/counterSlices';

//createSlices
import { decrement, increaseByAmount, increment } from './redux/slices/counterSlices';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter);
  console.log(counter);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Redux Toolkit Counter </h1>
        <h2> Counter: {counter?.value} </h2>

        <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increaseByAmount(100))}>Increase Amount</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;

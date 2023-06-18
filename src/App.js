import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0)
  const clicksCount = () => {
    setNumClics(numClics + 1)
  }
  const clicksReset = () => {
    setNumClics(0)
  }
  return (
    <div className="App">
      <div className='logoContainer'>
        <img className='freeCodeCampLogo' src={freeCodeCampLogo} alt='freeCodeCampLogo' />
      </div>
      <div className='appContainer'>
        <Counter numClics={numClics}/>
        <Button
          message= 'Click'
          clickscounter= {true}
          action={clicksCount}
        />
        <Button 
          message= 'Reboot'
          clickscounter={false}
          action={clicksReset}
        />
      </div>

    </div>
  );
}

export default App;

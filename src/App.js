import react , {useState} from 'react';
import './App.css';
import Bulb from './components/Bulb';

function App() {
  const [isBright, setIsDark] = useState(true);
  const display = document.querySelector('body');
  display.className = isBright ? "Bright" : "Dark";
  
  const theme = () => {
    setIsDark(!isBright);
  }
  return (
    
      <div>
        <div class="heading"> 
          <label class="switch">
            <input type="checkbox"></input>
            <span onClick={theme} class="slider round"> </span>
          </label>
          <br></br>
          <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications</p>
          </div>
          <Bulb />
        </div>
        
  );
  }

export default App;

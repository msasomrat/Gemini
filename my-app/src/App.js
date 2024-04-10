import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const[error, setError] = useState("")
  return (
    <div className="app">
     <section className = "search-section">
        <p>
          What do you want to know?
          <button className = "surprise">
              Surprise me!
          </button>
        </p>

        <div className="input-container">
              <input
                  value = {""}
                  placeholder="When this happened?"
                  onChange={""}
              />
              {!error && <button>Ask me</button>}
              {error && <button>Clear</button>}
        </div>
        {error && <p>{error}</p>}

        <div className = "search-result">
              <div key={""}>
                <p className="naswer"></p>
              </div>
        </div>
     </section>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('Appu'));




function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter: {count}</h1>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}


root.render(<CounterApp />);

/* CSS (Inside the same file using a <style> tag) */
const style = document.createElement("style");
style.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 20px;
    transition: 0.3s ease-in-out;
  }

  .button-group {
    display: flex;
    gap: 15px;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:nth-child(1) {
    background: #4caf50;
    color: white;
  }

  button:nth-child(2) {
    background: #f44336;
    color: white;
  }

  button:nth-child(3) {
    background: #ff9800;
    color: white;
  }

  button:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }

    button {
      font-size: 1rem;
      padding: 8px 16px;
    }
  }
`;
document.head.appendChild(style);

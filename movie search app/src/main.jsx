import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <App />
    </div>
  );
};

// Use React 18 createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

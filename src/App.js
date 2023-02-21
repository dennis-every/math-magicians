import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Quote from './routes/Quote';
import Calculator from './routes/Calculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;

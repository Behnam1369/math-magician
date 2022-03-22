import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './components/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;

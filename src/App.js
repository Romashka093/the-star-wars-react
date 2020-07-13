import React from 'react';
import Movies from './pages/Movie/Movie';
import css from './App.module.css';

function App() {
  return (
    <div className={css.conteiner}>
      <Movies />
    </div>
  );
}

export default App;

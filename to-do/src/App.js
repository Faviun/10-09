<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [page, setPage] = useState(1);
=======
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [page, setPage] = useState(2);
>>>>>>> d98c3b1224db35e2f06944612267ae9f6d14f71f
  return (
    <div>
      <Header changePage={setPage} />
      <Main page={page} />
      <footer></footer>
    </div>
  );
}

export default App;

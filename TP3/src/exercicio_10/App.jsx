import React from "react"
import styles from "./App.module.css";
import Amigos from './components/Amigos';
import Feed from './components/Feed';
import Header from './components/Header';
import Menu from './components/Menu';
import Sugestoes from './components/Sugestoes';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="main-content">
        <Feed />
        <div className="side-content">
          <Amigos />
          <Sugestoes />
        </div>
      </div>
    </div>
  );
}
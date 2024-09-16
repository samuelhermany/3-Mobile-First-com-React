import React from "react"
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
    <ul>
      <li>Home</li>
      <li>Perfil</li>
      <li>Mensagens</li>
      <li>Notificações</li>
    </ul>
    </nav>
  );
}
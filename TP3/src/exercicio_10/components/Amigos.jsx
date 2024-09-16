import React from 'react';
import styles from './Amigos.module.css';

export default function Amigos() {
  const amigos = [
    { nome: 'João', foto: 'https://static1.minhavida.com.br/articles/64/fe/df/e8/mediabox-pessoas-sempre-insatisfeitas-article-1.jpg', amigosComuns: 10 },
    { nome: 'Ana', foto: 'https://www.pensarcontemporaneo.com/content/uploads/2023/01/image-1-1068x722.jpg.webp', amigosComuns: 5 },
    { nome: 'Pedro', foto: 'https://dentistaubatuba.com.br/wp-content/uploads/2021/06/o-que-as-pessoas-bonitas-tem-em-comum-2.jpg', amigosComuns: 7 },
    // mais amigos...
  ];

  return (
    <div className={styles.amigos}>
      <h2 className={styles.titulo}>Amigos</h2>
      {amigos.map((amigo, index) => (
        <div key={index} className={styles.amigo}>
          <img src={amigo.foto} alt={amigo.nome} className={styles.foto} />
          <div>
            <span className={styles.nome}>{amigo.nome}</span>
            <span className={styles.amigosComuns}>
              {amigo.amigosComuns} amigos em comum
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
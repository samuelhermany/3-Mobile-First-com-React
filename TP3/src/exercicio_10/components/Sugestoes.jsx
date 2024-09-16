import React from 'react';
import styles from './Sugestoes.module.css';

export default function Sugestoes() {
  const sugestoes = [
    { nome: 'Carlos', foto: 'https://s2-oglobo.glbimg.com/6Jszzah_XGYop6I173dS4OE4lGQ=/0x107:2362x1557/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/B/7/BTZjbdREKYomgDBUVfIQ/jenn-granneman-5.jpg', amigoComum: 'João' },

    // mais sugestões...
  ];

  return (
    <div className={styles.sugestoes}>
      <h2>Sugestões de Amizade</h2>
      {sugestoes.map((sugestao, index) => (
        <div key={index} className={styles.sugestao}>
          <img src={sugestao.foto} alt={sugestao.nome} className={styles.foto} />
          <span className={styles.nome}>{sugestao.nome}</span>
          <span className={styles.amigoComum}>Amigo em comum: {sugestao.amigoComum}</span>
        </div>
      ))}
    </div>
  );
}
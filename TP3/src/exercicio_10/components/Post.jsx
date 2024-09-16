import React from 'react';
import styles from './Post.module.css';

export function Post({ postagem }) {
  return (
    <div className={styles.postagem}>
      <img src={postagem.imagem} alt="Post" className={styles.imagem} />
      <h2 className={styles.titulo}>{postagem.titulo}</h2>
      <p className={styles.texto}>{postagem.texto}</p>
      <div className={styles.meta}>
        <span>{postagem.autor}</span> | <span>{postagem.data}</span>
      </div>
      <div className={styles.interactions}>
        <span>{postagem.curtidas} Curtidas</span> | <span>{postagem.compartilhamentos} Compartilhamentos</span>
      </div>
      <div className={styles.comentarios}>
        <h3>Comentários:</h3>
        <ul>
          {postagem.comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
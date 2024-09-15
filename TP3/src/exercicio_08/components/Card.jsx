import React from "react"
import styles from "./Card.module.css";

export function Card({img_src, titulo, descricao, rodape}) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img_src} alt="imagem card" />
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.descricao}>{descricao}</p>
        <p className={styles.rodape}>{rodape}</p>
      </div>
    </div>
  )
}
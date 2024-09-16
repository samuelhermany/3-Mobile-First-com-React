import React from 'react';
import { Post } from './Post';
import styles from './Feed.module.css';

export default function Feed() {
  const postagens = [
    {
      id: 1,
      autor: 'Maria',
      titulo: 'Viagem incrível!',
      texto: 'Acabei de voltar de uma viagem inesquecível.',
      data: '12/09/2024',
      curtidas: 120,
      compartilhamentos: 30,
      comentarios: ['Que demais!', 'Fico feliz por você!'],
      imagem: 'https://s2-oglobo.glbimg.com/IFJKNrJkniG0yKVp-MZqj44FUW8=/0x0:4500x3000/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/B/n/SCNUhuTcG2onzOonCL8A/afp-20240829-36ez33h-v1-highres-italycinemavenicefilmfestivalmostra.jpg',
    },
  ];

  return (
    <div className={styles.feed}>
      {postagens.map((postagem) => (
        <Post key={postagem.id} postagem={postagem} />
      ))}
    </div>
  );
}
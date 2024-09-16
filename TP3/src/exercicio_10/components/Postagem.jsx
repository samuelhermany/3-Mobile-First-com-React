import React from 'react';
import './Postagem.css';

function Postagem({ postagem }) {
  return (
    <div className="postagem">
      <img src={postagem.imagem} alt="Post" />
      <h2>{postagem.titulo}</h2>
      <p>{postagem.texto}</p>
      <span>{postagem.autor}</span> | <span>{postagem.data}</span>
      <div className="interactions">
        <span>{postagem.curtidas} Curtidas</span> | <span>{postagem.compartilhamentos} Compartilhamentos</span>
      </div>
      <div className="comentarios">
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
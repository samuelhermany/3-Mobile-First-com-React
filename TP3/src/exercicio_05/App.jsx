import React from "react"
import styles from "./styles.css";

export default function App() {
  return (
    <div className="page-container">
      <h2 className="titulo2">Desenvolvimento Front-End com Frameworks</h2>
      <h3 className="titulo3">Mobile-First UI com React</h3>
      <h4 className="titulo4">Diferença entre responsividade e adaptabilidade</h4>
      <p className="paragraph">
        A responsividade refere-se à capacidade de um site ou aplicativo ajustar sua interface com base no tamanho da tela do dispositivo, proporcionando uma experiência de usuário consistente em dispositivos móveis, tablets e desktops.
      </p>
      <p className="paragraph">git status
        A adaptabilidade, por outro lado, envolve criar interfaces específicas para diferentes resoluções, onde o layout não necessariamente se ajusta de forma fluida, mas muda radicalmente com base em pontos de interrupção predefinidos.
      </p>
      <p className="paragraph">
        Em suma, a responsividade usa layouts fluídos e flexíveis, enquanto a adaptabilidade usa designs fixos para resoluções específicas.
      </p>
    </div>
  );
}
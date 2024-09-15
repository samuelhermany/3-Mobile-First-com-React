import React from "react"
import styles from "./App.module.css";
import { Card } from "./components/Card";
import imgCard from '../img/img_card.png'

export default function App() {
  return (
    <div>
      <Card
        img_src = {imgCard}
        titulo = 'Instituto Infnet'
        descricao = 'O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação de profissionais em Tecnologia da Informação, Negócios e para a Indústria Criativa.'
        rodape = 'Rua São José, 90 - Centro, Rio de Janeiro - RJ, 20010-020'
       />
    </div>
  )
}
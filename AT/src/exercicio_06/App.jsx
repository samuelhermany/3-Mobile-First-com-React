import React from "react";
import styles from "./App.module.css";
import { ShoppingList } from "./components/ShoppingList";

export default function App() {
  const items = [
    { nome: "Maçã", precoUnitario: 0.5, quantidade: 4 },
    { nome: "Banana", precoUnitario: 0.3, quantidade: 6 },
    { nome: "Laranja", precoUnitario: 0.7, quantidade: 3 },
  ];

  return (
    <div>
        <ShoppingList items={items} />
    </div>
  );
}
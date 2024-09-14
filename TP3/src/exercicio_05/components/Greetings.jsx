import React from "react"
import styles from "./Greetings.module.css";

export function Greetings(props) {
  return (
    <div>
      <div>Olá {props.name}</div>
    </div>
  )
}
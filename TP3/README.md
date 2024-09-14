# FUNDAMENTOS DE REACT
# PASTAS             | COMPONENTES                            | EXERCÍCIOS                         |
|--------------------|----------------------------------------|------------------------------------|
| TP3                | 1  - Greeting (name)                   |                                    |
|   - src            | 2  - Greeting (name, age)              |                                    |
|      - assets      | 3  - Counter (age)                     |                                    |
|      - componentes | 4  - Counter (age, count)              |                                    |
|   - questao_01     | 5  - DisplayCount                      |  - questao_01 = comp(1)            |
|   - questao_02     | 6  - Count (function_reset)            |  - questao_02 = comp(3)            |
|   - questao_03     | 7  - TodoList, TodoItem (task)         |  - questao_03 = comp(2)            |
|   - questao_04     | 8  - Temperature (props)               |  - questao_04 = comp(4, 5)         |
|   - questao_05     | 9  - ProfileCard (nome, [age])         |  - questao_05 = comp(3)            |
|                    | 10 - Product (nome, preço, [descrição])|             "function_reset        |
|--------------------|----------------------------------------|------------------------------------|
|   - questao_06     | 11 - StatusBadge (sytle)               |  - questao_06 = comp(7)            |
|--------------------|      (status[ativo, inativo, pendente])|------------------------------------|
|   - questao_07     |                                        |  - questao_07 = comp(7)            |
|                    |                                        |             "state=Concluir"       |
|--------------------|----------------------------------------|------------------------------------|
|   - questao_08     |                                        |  - questao_08 = comp(7)            |
|                    |                                        |             "state=Adicionar"     |
|--------------------|----------------------------------------|------------------------------------|
|   - questao_09     |                                        |  - questao_09 = comp(7)            |
|   - questao_10     |                                        |  - questao_10 = comp(7)            |
|                    |                                        |             "state=Excluir"        |
|                    |                                        |             [event(onTaskDelete)]  |
|--------------------|----------------------------------------|------------------------------------|
|   - questao_11     |                                        |  - questao_11 = comp(7)            |
|                    |                                        |             "state=Editar"         |
|                    |                                        |             [event(onTaskDelete)]  |
|--------------------|----------------------------------------|------------------------------------|
|   - questao_12     |                                        |  - questao_12 = comp(7)            |
|   - questao_13     |                                        |  - questao_13 = comp(8)            |
|   - questao_14     |                                        |  - questao_14 = comp(9)            |
|   - questao_15     |                                        |  - questao_15 = comp(10)           |
|   - questao_16     |                                        |  - questao_16 = comp(11)           |
|--------------------|----------------------------------------|------------------------------------|


    - questao_06 (to do list)
      criar componentes [TodoList, TodoItem (task)]
    - questao_07 (to do list)
      continuação anterior
      criar checkBox(Concluir Tarefa) "state=Concluir"
    - questao_08 (to do list)
      continuação anterior
      criar botão(Adicionar[geral]) "state=Adicionar"
    - questao_09 (to do list)
      continuação anterior
      passagem de PROPS
    - questao_10 (to do list)
      continuação anterior
      criar botão(Excluir[p/cada tarefa]) "state=Excluir"
    - questao_11 (to do list)
      continuação anterior
      criar botão(Editar[p/cada tarefa]) "state=Editar"


|--------------------------------------------------------------------------------------------------|
    - FEITOS -
    - 1 ATÉ 5
    - questao_01
      criar componente GREETING(name)
      passar valor com uma função map

    - questao_02
      criar componente COUNTER
      criar botão de incremento

    - questao_03
      criar componente GREETING(name, age)
      exibir uma mensagem

    - questao_04
      criar componente COUNTER(passa=count)
      criar botão de incremento
      criar componente DISPLAYCOUNT(count)

    - questao_05
      criar componente COUNTER
      criar botão de incremento
      criar botão de reset
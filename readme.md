# 🤖 Missão: Programar o Robô

Jogo educativo desenvolvido em **HTML, CSS e JavaScript**, criado para apresentar conceitos básicos de programação para crianças de aproximadamente **6 a 7 anos**.

A proposta é transformar a programação em uma brincadeira: a criança monta uma sequência de comandos para conduzir um robô por um tabuleiro 4×4 até uma linha de chegada, evitando obstáculos.

## 🎯 Objetivo pedagógico

O jogo não pretende ensinar uma linguagem de programação. O objetivo é apresentar, de forma visual e divertida, conceitos fundamentais presentes no trabalho de um programador:

- sequência de instruções;
- lógica e planejamento;
- execução de um programa;
- identificação de erros (*bugs*);
- correção de instruções;
- tentativa, erro e solução de problemas.

A ideia central é mostrar que **programar é dar instruções para que o computador execute uma tarefa**.

## 🎮 Como funciona

O jogador controla um robô 🤖 em um tabuleiro de **4×4 casas**.

Para programar o robô, o jogador adiciona comandos à sequência de execução:

| Comando | Ação |
|---|---|
| ↑ | Mover uma casa para cima |
| ↓ | Mover uma casa para baixo |
| ← | Mover uma casa para a esquerda |
| → | Mover uma casa para a direita |

Os comandos são adicionados ao programa antes da execução. Depois, o jogador clica em **Executar** e acompanha o robô realizando as instruções uma por uma.

## 🗺️ Tipos de casas

O tabuleiro possui quatro tipos de casas:

| Casa | Comportamento |
|---|---|
| 👣 Livre | O robô pode passar normalmente |
| 💧 Água | O robô cai na água e a missão termina |
| 🧱 Parede | O robô não consegue avançar e fica parado; o programa pode ser corrigido |
| 🏁 Chegada | O jogador vence ao chegar nessa casa |

A **parede** possui um comportamento diferente dos demais obstáculos. Ela permite demonstrar a ideia de *debug*: quando uma instrução não funciona, a criança pode identificar o problema, alterar o programa e tentar novamente.

## 🧩 Níveis

O jogo possui dois níveis progressivos:

### Nível 1 — Primeira missão

Apresenta a mecânica básica. O jogador precisa chegar à bandeira usando as setas e evitando a água.

### Nível 2 — Cuidado com as paredes

Introduz paredes. O jogador precisa planejar um caminho diferente e pode corrigir o programa caso encontre uma parede.


## 🐛 Conceito de BUG

Um dos objetivos da atividade é introduzir o conceito de **bug** de maneira simples.

Quando uma sequência de comandos não produz o resultado esperado, o jogador precisa observar o que aconteceu e descobrir qual instrução precisa ser alterada.

Isso permite fazer uma analogia com o trabalho de um desenvolvedor:

> Criar → executar → encontrar um problema → corrigir → executar novamente.


## Exemplo alteração de tema

Uma possibilidade preparada no jogo é a alteração do tema de robô x água, para um tema de rato x armadilha, para ilustrar a alteração de código refletindo em tempo real a alteração no jogo. As linhas a serem alteradas estão comentadas no código.


## 🛠️ Tecnologias

O projeto é propositalmente simples e não possui dependências externas.

- **HTML5** — estrutura da aplicação
- **CSS3** — layout, aparência e responsividade
- **JavaScript** — lógica do jogo, movimentação do robô, execução dos comandos e controle dos níveis

Tudo está concentrado em um único arquivo HTML, permitindo executar o jogo diretamente no navegador.

## ▶️ Como executar

Não é necessário instalar Node.js, npm, servidor web ou qualquer outra ferramenta.

1. Baixe o arquivo `missao_programar_o_robo.html`.
2. Abra o arquivo em um navegador moderno, como Chrome, Edge, Safari ou Firefox.
3. Escolha um nível.
4. Monte a sequência de comandos.
5. Clique em **Executar**.

## 📁 Estrutura

```text
.
├── index.html
├── main.js
├── style.css
└── README.md
```

O arquivo HTML contém:

- estrutura da interface;

O arquivo style.css contém:
- estilos CSS;

O arquivo main.js contém:
- configuração dos níveis;
- definição dos tipos de casas;
- comandos de movimentação;
- lógica de execução do programa;
- mensagens de sucesso, erro e obstáculos.

## 🎓 Uso em uma apresentação escolar

O jogo foi pensado para uma apresentação de aproximadamente **20 minutos** para uma turma de crianças de 6–7 anos.

Uma sugestão de dinâmica:

1. **Apresentação — 3 minutos**  
   Explicar de forma simples o que faz um programador.

2. **Explicação do jogo — 2 minutos**  
   Mostrar as quatro setas e explicar que elas são as instruções que o robô entende.

3. **Desafios — 10 minutos**  
   A turma sugere coletivamente uma sequência de comandos e observa o resultado.

4. **BUG — 3 minutos**  
   Apresentar uma sequência que encontra uma parede ou termina sem chegar ao destino e pedir que as crianças descubram o problema.

5. **Variação tema — 2 minutos**  
   Ilustrar como seriam as alterações para alterar o tema do jogo.

6. **Conclusão — 2 minutos**  
   Relacionar a brincadeira ao trabalho de um programador: criar, testar, encontrar problemas e corrigir.

## 💡 Possíveis evoluções

O projeto pode ser expandido futuramente com:

- mais níveis;
- criação aleatória de tabuleiros;
- limite de comandos por desafio;
- sistema de pontuação;
- cronômetro;
- animações mais elaboradas;
- sons para água, bomba e chegada;
- modo de criação de desafios pelo professor;
- comandos de repetição, como `↻ repetir`;
- cartas virtuais de instruções;
- modo cooperativo para a turma resolver um desafio em conjunto.

## 📄 Licença

Projeto educacional pessoal, criado para fins de demonstração e aprendizagem. Sinta-se livre para adaptar a mecânica, os níveis e o visual para atividades educativas.

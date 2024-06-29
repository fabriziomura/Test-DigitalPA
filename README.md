# Test-DigitalPA

### Descrizione
Questo progetto è una CLI (Command Line Interface) che permette agli utenti di eseguire determinati comandi: `rollDice`, `findWaldo` e `easterDate`

### Installazione
Clonare il repository e installa le dipendenze:
- typescript@5.5.2
- @types/node@20.14.9
- commander@12.1.0


### Utilizzo
Per avviare la CLI, esegui: 

- npx ts-node app.ts

### Comandi Disponibili
- `rollDice <numeroDadi> <numeroFacce>`: 
Tira un numero specificato di dadi con un numero specifico di facce

- `findWaldo <frase>`: 
Cerca la parola "Waldo" in una stringa

- `easterDate <anno>`: 
Dato l'anno trova la data esatta della Pasqua
  - Opzioni:
    - `-m, --monthonly`: 
    Restituisce solo il mese di Pasqua

### Esempi
- rollDice 2 6 
- findWaldo “Hello, I’m Waldo” 
- easterDate 2024 -m




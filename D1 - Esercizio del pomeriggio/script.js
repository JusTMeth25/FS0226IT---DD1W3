/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
  {
    id: 1,
    nome: "Mario",
    cognome: "Rossi",
    eta: 28,
    attivo: true,
    città: "Milano",
  },
  {
    id: 2,
    nome: "Anna",
    cognome: "Bianchi",
    eta: 35,
    attivo: false,
    città: "Roma",
  },
  {
    id: 3,
    nome: "Luca",
    cognome: "Verdi",
    eta: 22,
    attivo: true,
    città: "Milano",
  },
  {
    id: 4,
    nome: "Sara",
    cognome: "Neri",
    eta: 17,
    attivo: true,
    città: "Torino",
  },
  {
    id: 5,
    nome: "Marco",
    cognome: "Gialli",
    eta: 45,
    attivo: false,
    città: "Roma",
  },
  {
    id: 6,
    nome: "Chiara",
    cognome: "Rosa",
    eta: 30,
    attivo: true,
    città: "Milano",
  },
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const quadrato = (n) => n * n;
console.log(quadrato(5));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
  nome: "Giulia",
  cognome: "Conti",
  eta: 32,
  città: "Firenze",
};
const { nome, cognome, eta } = persona;
console.log(nome, cognome, eta);

const users = utenti.map(({ nome, cognome, eta }) => ({ nome, cognome, eta }));
users.forEach((user) => {
  const { nome, cognome, eta } = user;
  console.log(nome, cognome, eta);
});

/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const riepilogo = ({ nome, cognome, eta }) =>
  `${nome} ${cognome} (${eta} anni)`;
console.log(riepilogo(utenti[0]));
console.log(riepilogo(utenti[1]));
console.log(riepilogo(utenti[2]));

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [1, 2, 3];
const copiaNumeri = [...numeri];
copiaNumeri.push(99);
console.log(`Originale: [${numeri}]`);
console.log(`Copia: [${copiaNumeri}]`);
/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const frutti = ["mela", "banana"];
const verdure = ["carota", "spinaci"];
const unioneFrutti = [...frutti, ...verdure];
console.log(unioneFrutti);
/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotto = { nome: "Cuffie", prezzo: 79.99 };
const nuovoProdotto = { ...prodotto, disponibile: true };
console.log(nuovoProdotto);
/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
utenti.forEach(({ nome, cognome, città }) => {
  console.log(`- ${nome} ${cognome} (${città})`);
});
/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nomiCompleti = utenti.map(({ nome, cognome }) => {
  return `${nome} ${cognome}`;
});
console.log(nomiCompleti);
/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const copiaUtenti = [...utenti];
const utentiPlus = copiaUtenti.map(
  ({ id, nome, cognome, eta, attivo, città }) => {
    return {
      id,
      nome,
      cognome,
      eta,
      attivo,
      città,
      descrizione: `${nome} ${cognome}, ${città}`,
    };
  },
);
console.log(utentiPlus[0]);


/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utenteAttivo = utenti.filter((utenti) => utenti.attivo);

console.log(utenteAttivo);

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utentiMaggiorenni = utenti.filter(
  (utenti) => utenti.eta >= 18 && utenti.città === "Milano",
);

const idUtenti = utentiMaggiorenni.map((utenti) => utenti.id).join(",");
const nomiUtenti = utentiMaggiorenni.map((utenti) => utenti.nome).join(",");

console.log(`utenti maggiorenni a Milano: id ${idUtenti} - ${nomiUtenti}`);

/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const founded = utenti.find((utenti) => utenti.id === 4);
console.log(founded);
/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sommaEta = utenti.reduce((acc, utenti) => acc + utenti.eta, 0);
const mediaEta = sommaEta / utenti.length;
const numUtentiAttivi = utenti.reduce((acc, utenti) => acc + utenti.attivo, 0);

console.log(`età media: ${mediaEta}`);
console.log(`utenti attivi: ${numUtentiAttivi}`);

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ordinaPerEta = [...utenti].sort((a, b) => a.eta - b.eta);
const nomiPerEta = ordinaPerEta.map((utenti) => utenti.nome);

const ordinaPerNome = [...utenti].sort((a, b) => a.nome.localeCompare(b.nome));
const nomiPerAlfabeto = ordinaPerNome.map((utenti) => utenti.nome);
console.log(`per età: ['${nomiPerEta}']`);
console.log(`per nome: ['${nomiPerAlfabeto}']`);

/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const Chaining = utenti
  .filter((utenti) => utenti.attivo)
  .map((utenti) => `${utenti.nome} ${utenti.cognome}`)
  .sort();
console.log(Chaining);

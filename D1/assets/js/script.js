const traditionalCode = document.querySelector("#traditionalCode");
const traditionalResult = document.querySelector("#traditionalResult");
const arrowCode = document.querySelector("#arrowCode");
const arrowResult = document.querySelector("#arrowResult");

let a = 5;
let b = 8;
// Expression function tradizionale
const traditionalSum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b; // return implicito, senza graffe, quando il corpo della funzione è composto da una sola espressione, DA SCRIVERE OBBLIGATORIAMENTE SU UNA SOLA RIGA

traditionalCode.innerHTML =
  "<code> const traditionalSum = function (a, b) { return a + b;}</code>";

traditionalResult.textContent = traditionalSum(8, 5);

arrowCode.innerHTML = "<code> const arrowSum = (a, b) => a + b;</code>";

arrowResult.textContent = arrowSum(8, 5);

// this contestuale : e' l'oggetto window nelle funzioni classiche/expression function
const utente = {
  nome: "Lorenzo",
  saluta: function () {
    console.log(`Ciao, ${this.nome}`); // this contestuale, si riferisce all'oggetto che lo contiene, in questo caso utente, binding implicito.
  },
};

utente.saluta(); // Ciao, Lorenzo
// this nelle funzioni tradizionali viene definito all'interno di un oggetto che ha un metodo

const developer = function (developer) {
  console.log(`Sono ${this.name}, sviluppatore ${this.language}`);
};

const newDeveloper = {
  name: "Lorenzo",
  language: "JavaScript",
};

developer.call(newDeveloper); // this non è contestuale, non si riferisce all'oggetto che lo contiene, ma al contesto globale, in questo caso window, binding globale
// this nelle arrow function è lessicale, si riferisce al contesto in cui è stata definita, in questo caso al contesto globale, in questo caso window, binding lessicale

this.name = "Pippo"; // variabili interne a this
this.language = "PHP";

developer(this.name, this.language); // Sono Pippo, sviluppatore PHP
// this lessicale: arrow function, eredita il valore dal punto in cui è chiamata e da come è chiamata la funzione
const myCar = {
  brand: "Fiat",
  model: "500",
  obtainDescription: function () {
    const describeCar = () => {
      console.log(`Auto: ${this.brand} ${this.model}`);
      return `Auto: ${this.brand} ${this.model}`;
    };
    return describeCar();
  },
};

console.log(myCar.obtainDescription()); // Auto: undefined undefined, this non è contestuale, si riferisce al contesto globale, in questo caso window, binding lessicale

function container() {
  const myArrow = () => {
    console.log(`Eredito il this dall'invocazione della funzione: ${this}`);
  };
  myArrow();
}

container.call("Antonio");
container.call("Lorenzo");

/*const counter = {
  seconds: 0,
  start: function () {
    const myCounter = setInterval(() => {
      this.seconds++; // incrementa il contatore dei secondi ogni secondo, this è lessicale, si riferisce al contesto in cui è stata definita, in questo caso al contesto dell'oggetto counter, binding lessicale
      console.log(this.seconds);
      if (this.seconds === 8) {
        // quando il contatore raggiunge i 8 secondi, si ferma
        console.log("Counter stopped");
        clearInterval(myCounter); // clearInterval è una funzione che ferma l'esecuzione di una funzione ripetitiva, in questo caso myCounter, quando viene raggiunta la condizione this.seconds === 8
      }
    }, 1000);
  },
};

counter.start();
*/
class Counter {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    const myCounter = setInterval(() => {
      this.seconds--;
      console.log(this.seconds);
      if (this.seconds === 0) {
        console.log("STOP!");
        clearInterval(myCounter);
      }
    }, 1000);
  }
}

const newCounter = new Counter(5);
console.log(newCounter.start());
// esempio callback

function sum(a, b) {
  console.log(callbackSum(a, b));
}
const callbackSum = (a, b) => {
  return a + b;
};
console.log(sum(4, 5));

// destructuring
const notObject = document.querySelector("#notObject");
const yesArray = document.querySelector("#yesArray");
const yesObject = document.querySelector("#yesObject");
const modernObject = document.querySelector("#modernObject");
const anotherObject = document.querySelector("#anotherObject");

const namesArray = ["Pippo", "Pluto", "Paperino"];
const student = {
  studentName: "Lorenzo",
  surname: "Melis",
  age: 29,
};

const record = {
  title: "The Dark Side of the Moon",
  author: "Pink Floyd",
  year: 1973,
};

notObject.textContent = student;
yesArray.textContent = namesArray;
yesObject.textContent = `${student.studentName}, ${student.surname}, ${student.age}`;

const { studentName, surname, age } = student; // destructuring, estrazione di proprietà da un oggetto e assegnazione a variabili con lo stesso nome delle proprietà, in questo caso name, surname e age. Se l'oggetto si modifica, i valori delle variabili non cambiano, in quanto con questa destrutturazione sono fotografie dell'oggetto in un datro punto del codice.
modernObject.textContent = `${studentName}, ${surname}, ${age}`;

let { title, author, year } = record; //destrutturo con let quando devo manipolare i valori dell'oggetto senza intacare l'oggetto originario, in questo caso record
((title = "A sourceful of secrets"), (author = "Pink Floyd"), (year = 1968)); // Modifica i valore delle variabili senza intaccare l'oggetto originario
console.log(record);
anotherObject.textContent = `${title}, ${author}, ${year}`; // Led Zeppelin IV, Led Zeppelin, 1973

if (author === "Pink Floyd") {
  record.title = title;
  record.author = author;
  record.year = year;
} else {
  console.error("Autore non corrispondente");
}
console.log(record);

// spread e rest operator
const myNameArray = ["Pippo", "Pluto", "Paperino"];
// const copyNames = myNameArray; // copia per riferimento, se modifico copyNames, modifico anche myNameArray, in quanto sono due variabili che puntano allo stesso array in memoria
const copyNames = [...myNameArray]; // spread operator, copia per valore, se modifico copyNames, non modifico myNameArray, in quanto sono due variabili che puntano a due array diversi in memoria
console.log(myNameArray, copyNames);

copyNames[1] = "Paperone"; // modifico copyNames, modifico anche myNameArray, in quanto sono due variabili che puntano allo stesso array in memoria
console.log(myNameArray, copyNames);

const firstPerson = {
  personName: "James",
  address: {
    via: "Roma",
    citta: "Napoli",
  },
};

const otherAddress = { ...firstPerson.address }; // spread operator, copia per valore, se modifico otherAddress, non modifico firstPerson.address, in quanto sono due variabili che puntano a due oggetti diversi in memoria

const otherPerson = { ...firstPerson }; // spread operator, copia per valore, se modifico otherPerson, non modifico firstPerson, in quanto sono due variabili che puntano a due oggetti diversi in memoria
otherPerson.address = { ...otherAddress }; // spread operator, copia per valore, se modifico otherPerson.address, non modifico firstPerson.address, in quanto sono due variabili che puntano a due oggetti diversi in memoria

otherPerson.address.citta = "Roma"; // modifico otherPerson.address.citta, modifico anche firstPerson.address.citta, in quanto sono due variabili che puntano allo stesso oggetto in memoria, in questo caso otherAddress, che è una copia per valore di firstPerson.address, ma è un oggetto che contiene a sua volta un oggetto, quindi quando modifico otherPerson.address.citta, modifico anche firstPerson.address.citta, in quanto sono due variabili che puntano allo stesso oggetto in memoria

console.log(firstPerson, otherPerson);

const mySum = (...values) => {
  // rest operator, permette di raccogliere un numero indefinito di argomenti in un array, in questo caso values, che è un array che contiene tutti gli argomenti passati alla funzione, in questo caso 3, 4, 5, 8, 9, 12, 23, 45 e 10. Il rest operator deve essere l'ultimo parametro della funzione, in quanto raccoglie tutti gli argomenti rimanenti in un array.
  let myTotal = 0;
  for (let i = 0; i < values.length; i++) {
    myTotal += values[i];
  }
  return myTotal;
};

console.log(`Somma con tre parametri: ${mySum(3, 4, 5)}`); // Somma con tre parametri: 12
console.log(`Somma con due parametri: ${mySum(8, 9)}`); // Somma con due parametri: 17
console.log(`Somma con quattro parametri: ${mySum(12, 23, 45, 10)}`); // Somma con quattro parametri: 90

// Metodi array ES6+
namesArray.forEach((name) => {
  // equivale a for of o al for classico, ma è più semplice da scrivere e da leggere, in quanto non richiede la dichiarazione di una variabile di iterazione, in questo caso name, e non richiede la dichiarazione di un indice, in questo caso i, e non richiede la dichiarazione di una condizione di uscita, in questo caso i < namesArray.length, e non richiede la dichiarazione di un incremento, in questo caso i++, in quanto forEach si occupa di tutto questo automaticamente. Inoltre, forEach è un metodo che appartiene agli array, quindi può essere utilizzato solo su array, mentre for e for of possono essere utilizzati su qualsiasi tipo di iterabile.
  console.log(name);
}); // forEach, metodo che permette di iterare su un array, esegue una funzione per ogni elemento dell'array, in questo caso una funzione freccia che stampa il nome, in questo caso Pippo, Pluto e Paperino

// map, metodo che permette di creare un nuovo array a partire da un array esistente, esegue una funzione per ogni elemento dell'array e restituisce un nuovo array con i risultati della funzione, in questo caso una funzione freccia che moltiplica il numero per 2, in questo caso 2, 4, 6, 8 e 10
const firstNumberArray = [1, 2, 3, 4, 5];
const multiply = firstNumberArray.map((number) => {
  return number * 2;
});

console.log(firstNumberArray);
console.log(multiply);

// filter
const genericNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const pairs = genericNumber.filter((number) => number % 2 === 0); // filter, metodo che permette di creare un nuovo array a partire da un array esistente, esegue una funzione per ogni elemento dell'array e restituisce un nuovo array con gli elementi che soddisfano la condizione della funzione, in questo caso una funzione freccia che verifica se il numero è pari, in questo caso 2, 4, 6, 8 e 10

console.log(pairs);

const genericNames = ["Lorenzo", "Pippo", "Pluto", "Paperino", "Paperone"];
const namesWithP = genericNames.filter((name) => name.startsWith("P")); // filter, metodo che permette di creare un nuovo array a partire da un array esistente, esegue una funzione per ogni elemento dell'array e restituisce un nuovo array con gli elementi che soddisfano la condizione della funzione, in questo caso una funzione freccia che verifica se il nome inizia con la lettera P, in questo caso Pippo, Pluto, Paperino e Paperone
console.log(namesWithP);

// find, metodo che permette di trovare il primo elemento di un array che soddisfa una condizione, esegue una funzione per ogni elemento dell'array e restituisce il primo elemento che soddisfa la condizione della funzione, in questo caso una funzione freccia che verifica se il numero è maggiore di 5, in questo caso 6
const users = [
  { userName: "Lorenzo", age: 29 },
  { userName: "Pippo", age: 30 },
  { userName: "Stefano", age: 31 },
  { userName: "Paperino", age: 32 },
];

console.log(users.includes("Lorenzo")); // false, includes, metodo che permette di verificare se un array contiene un elemento, restituisce true se l'elemento è presente nell'array, in questo caso false, in quanto users è un array di oggetti e non contiene la stringa "Lorenzo", ma contiene un oggetto con la proprietà userName che ha il valore "Lorenzo"
const finded = users.find((user) => user.userName === "Lorenzo"); // find, metodo che permette di trovare il primo elemento di un array che soddisfa una condizione, esegue una funzione per ogni elemento dell'array e restituisce il primo elemento che soddisfa la condizione della funzione, in questo caso una funzione freccia che verifica se la proprietà userName dell'oggetto è uguale a "Lorenzo", in questo caso { userName: "Lorenzo", age: 29 }
console.log(finded);

// reduce, metodo che permette di ridurre un array a un unico valore, esegue una funzione per ogni elemento dell'array e restituisce un unico valore che è il risultato della funzione, in questo caso una funzione freccia che somma i numeri, in questo caso 15
const total = genericNumber.reduce((acc, number) => acc + number);
console.log(total);

// sort, metodo che permette di ordinare un array, esegue una funzione per ogni elemento dell'array e restituisce un nuovo array ordinato, in questo caso una funzione freccia che confronta due numeri e restituisce un numero negativo se il primo numero è minore del secondo, un numero positivo se il primo numero è maggiore del secondo e 0 se i due numeri sono uguali, in questo caso [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(genericNumber.sort()); // se non usato per generare un array ordinato, modifica l'ordine dell'array originario
console.log(genericNumber[3]); // 5, l'array genericNumber è stato modificato dall'uso del metodo sort, in quanto sort modifica l'array originario, in questo caso genericNumber, e non restituisce un nuovo array ordinato, in questo caso [2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(genericNumber.reverse()); // se non usato per generare un array ordinato, modifica l'ordine dell'array originario, in questo caso genericNumber, e restituisce un nuovo array con l'ordine invertito, in questo caso [10, 9, 8, 7, 6, 5, 4, 3, 2]

const correctedSort = genericNumber.sort((a, b) => a - b); // se voglio mantenere l'ordine dell'array originario, devo creare una copia dell'array prima di usare il metodo sort, in questo caso genericNumber, e poi usare sort sulla copia, in questo caso correctedSort, in modo da non modificare l'array originario, in questo caso genericNumber
console.log(correctedSort); // [2, 3, 4, 5, 6, 7, 8, 9, 10], array ordinato in modo corretto, in questo caso genericNumber è stato copiato in correctedSort prima di essere ordinato, in modo da non modificare l'array originario, in questo caso genericNumber

// chaining
const majorAge = [
  {
    userName: "Lorenzo",
    age: 24,
  },
  {
    userName: "Anna",
    age: 24,
  },
  {
    userName: "Nicola",
    age: 2,
  },
  {
    userName: "Maria",
    age: 24,
  },
  {
    userName: "Giovanni",
    age: 11,
  },
  {
    userName: "Tonio",
    age: 13,
  },
  {
    userName: "Stefania",
    age: 35,
  },
];
const maggiorenni = majorAge
  .filter((user) => user.age >= 18)
  .map((user) => user.userName)
  .sort();
console.log(maggiorenni); // ["Anna", "Giovanni", "Lorenzo", "Maria", "Stefania", "Tonio"], array di stringhe con i nomi degli utenti maggiorenni, in questo caso Anna, Giovanni, Lorenzo, Maria, Stefania e Tonio, ordinati in ordine alfabetico, in questo caso con il metodo sort() senza parametri, che ordina le stringhe in ordine alfabetico. Il chaining è una tecnica che permette di concatenare più metodi su un array, in questo caso filter(), map() e sort(), in modo da ottenere un risultato finale in modo più semplice e leggibile.

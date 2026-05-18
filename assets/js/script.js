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
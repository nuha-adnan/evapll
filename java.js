var mathque = [
  { question: " x^2+x^2", Options: ["2x^2", "x^4", "x^8", "2x^4"], cur: 0 },
  { question: "x^2*x^2", Options: ["x^4", "x^2", "2x^2", "4x"], cur: 0 },
  {
    question: "Was ist das Ergebnis von 7 + 8?",
    Options: ["12", "14", "15", "16", "18"],
    cur: 2,
  },
  {
    question:
      "Wie lautet der Wert von π (Pi) auf zwei Dezimalstellen gerundet?",
    Options: ["2.14", "3.13", "3.15", "3.14", "3.16"],
    cur: 3,
  },
  {
    question: "Was ist das Quadrat von 6?",
    Options: ["30", "32", "36", "40", "42"],
    cur: 2,
  },
  {
    question: "Wie lautet die Ableitung von f(x) = 3x^2?",
    Options: ["6", "6x", "3x", "6x^2", "9x"],
    cur: 1,
  },
  {
    question: "Was ist der Wert von √64?",
    Options: ["6", "7", "8", "9", "10"],
    cur: 2,
  },
];

var allgemeinque = [
  {
    question: "Welches Land hat die größte Bevölkerung?",
    Options: ["USA", "Indien", "China", "Russland", "Brasilien"],
    cur: 2,
  },
  {
    question: "Welcher Planet ist der dritte von der Sonne?",
    Options: ["Mars", "Venus", "Erde", "Jupiter", "Saturn"],
    cur: 2,
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    Options: ["5", "6", "7", "8", "9"],
    cur: 2,
  },
  {
    question: "Welches Element hat das chemische Symbol O?",
    Options: ["Gold", "Silber", "Sauerstoff", "Wasserstoff", "Kohlenstoff"],
    cur: 2,
  },
  {
    question: "Welches Jahr markierte das Ende des Zweiten Weltkriegs?",
    Options: ["1942", "1943", "1944", "1945", "1946"],
    cur: 3,
  },
  {
    question: "Wer schrieb 'Die Verwandlung'?",
    Options: [
      "Franz Kafka",
      "Friedrich Schiller",
      "Johann Wolfgang von Goethe",
      "Thomas Mann",
      "Hermann Hesse",
    ],
    cur: 0,
  },
  {
    question:
      "Welches ist das kleinste und leichteste Element im Periodensystem?",
    Options: ["Helium", "Lithium", "Wasserstoff", "Sauerstoff", "Stickstoff"],
    cur: 2,
  },
];

var itque = [
  {
    question: "Was bedeutet HTML?",
    Options: [
      "Hypertext Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hypertext Markdown Language",
      "Hyperlinking Textual Mark Language",
    ],
    cur: 0,
  },
  {
    question:
      "Welches Protokoll wird häufig verwendet, um Websites zu besuchen?",
    Options: ["FTP", "SMTP", "HTTP", "POP3", "IMAP"],
    cur: 2,
  },

  {
    question:
      "Was ist die richtige Methode, um ein neues HTML-Element zu erstellen?",
    Options: [
      "document.createElement('elementName')",
      "document.createElement()",
      "document.newElement('elementName')",
      "document.newElement()",
    ],
    cur: 3,
  },
  {
    question: "Was ist ein Callback in JavaScript?",
    Options: [
      "Eine Funktion, die nach einer anderen Funktion aufgerufen wird",
      "Eine Funktion, die vor einer anderen Funktion aufgerufen wird",
      "Eine Funktion, die nur einmal aufgerufen wird",
      "Eine Funktion, die wiederholt aufgerufen wird",
    ],
    cur: 3,
  },
  {
    question: "Was ist die Verwendung von `async` und `await` in JavaScript?",
    Options: [
      "Um Asynchronität zu handhaben",
      "Um Schleifen zu unterbrechen",
      "Um Variablen zu deklarieren",
      "Um Werte zu vergleichen",
    ],
    cur: 3,
  },
  {
    question: "Was ist ein Closure in JavaScript?",
    Options: [
      "Eine Funktion, die auf Variablen aus ihrem äußeren Kontext zugreift",
      "Eine Funktion, die keine Argumente akzeptiert",
      "Eine Funktion, die Variablen lokalisiert",
      "Eine Funktion, die eine andere Funktion kapselt",
    ],

    cur: 3,
  },
  {
    question: "Was ist JavaScript?",
    Options: [
      "Eine Programmiersprache",
      "Ein HTML-Tag",
      "Ein CSS-Stil",
      "Ein Datenbankmanagementsystem",
    ],

    cur: 3,
  },
  {
    question: "Was ist IT?",
    Options: [
      "Informationstechnologie",
      "Interaktive Technologie",
      "Internet-Technik",
      "Intelligente Technologie",
    ],
    cur: 3,
  },
];

var Externalarr = getexternalquiz();
var n = 0;
var arr = [];
var score = 0;
var scorediv = document.getElementById("score");
var option = document.getElementById("options");
var exam = document.getElementById("exam");
var Externalquizz = false;

function tabshow(x) {
  var startdiv = document.getElementById("start"); // 1
  startdiv.style.display = "none";

  var qustiondiv = document.getElementById("question");
  if (x == "Mathe") {
    arr = mathque;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  if (x == "Allgemeines") {
    arr = allgemeinque;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  if (x == "IT") {
    arr = itque;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  if (x == "External") {
    arr = Externalarr;
    Externalquizz = true;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  exam.style.display = "flex";
  var tabs = document.getElementById("tabs");
  tabs.style.display = "none";

  var qs = document.getElementById("qs");
  qs.style.display = "block";
}

////   0-1-2         3
function nextfrage() {
  if (n == arr.length - 1) {
    option.style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("frage").style.display = "none";
    scorediv.innerHTML = "richtige Antworten:" + score;
    n = n + 1;
    fortschritt();
    n = 0;
    return;
  }

  n = n + 1;
  fortschritt();
  var qustiondiv = document.getElementById("question");
  qustiondiv.innerHTML = arr[n].question;

  showoptions(arr[n].Options);
}

var buttonfarge = document.getElementById("frage");

buttonfarge.addEventListener("click", function () {
  nextfrage();
});

function showoptions(arrop) {
  option.innerHTML = "";
  document.getElementById("frage").disabled = true;
  arrop.forEach((opt, index) => {
    var bttant = document.createElement("button"); // button erstellen für optionnen
    bttant.innerHTML = opt;
    bttant.style.display = "block";
    option.appendChild(bttant);
    bttant.addEventListener("click", () => { 
      bttant.style.backgroundColor ="red";
      document.getElementById("frage").disabled = false;
      apscore(index) ;
    
      var buttons = option.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }

    }); // Antwort auswällen und score wird mehr
   
  });
}
// [ "see" , "use", "see"]  arr[0]
function apscore(x) {
  if (Externalquizz) {
    (async () => {
      try {
        const data = await solveQustion(arr[n].id, x);
        console.log(data);
        if (data.success) {
          score++;
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    })();
  } else {
    if (x == arr[n].cur) {
      score++;
    }
  }
}

function fortschritt() {
  var fortschrittdiv = document.getElementById("fortschritt");

  let percnet = ( n / arr.length  ) *100;

  fortschrittdiv.style.width = percnet + "%";
}

function getexternalquiz() {
  let quizz = [];
  for (var i = 0; i < 5; i++) {
    let id = Math.floor(Math.random() * 100) + 1;
    (async () => {
      try {
        const data = await getQuestionFromServerById(id);
        console.log(data); // Directly get the resolved value
        let quiizzobject = {
          id: data.id,
          question: data.text,
          Options: data.options,
        };

        quizz.push(quiizzobject);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    })();
  }

  return quizz;
}

async function getQuestionFromServerById(questionId) {
  const baseUrl = "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/";
  const url = baseUrl + questionId;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@gmail.com:secret"),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch question: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

async function solveQustion(id, index) {
  const baseUrl =
    "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" +
    id +
    "/solve";
  let answer = [];
  answer.push(index);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@gmail.com:secret"),
      },
      body: JSON.stringify(answer),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch question: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
option = options,
function (err, data) {
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
 // document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// strict (Good to use)
'use strict'

// The array that will contain the Quotes
var quotes = [];

// Adding First quote as an object in the curly braces
quotes[0] = {quote: "Moral indignation is jealousy with a halo.",
             source: "H.G. Wells",
             category: "Literature"};
// Adding Second quote as an object in curly braces
quotes[1] = {quote: "Be yourself; everyone else is already taken.",
             source: "Oscar Wilde",
             category: "Literature"};
//Adding Third quotes as an object in the curly braces
quotes[2] = {quote: "So many books, so little time.",
             source: "Frank Zappa",
             category: "Humor"};
//Adding Fourth quotes an object in the curly braces
quotes[3] = {quote: "A room without books is like a body without a soul",
             source: "Marcus Tullius Cicero",
             category: "Soul"};
//Adding Fifth quote as an object in the curly braces
quotes[4] = {quote: "You only live once, but if you do it right, once is enough.",
             source: "Mae West",
             category: "Life"};
//Adding sixth quote as an object in the curly braces
quotes[5] = {quote: "Be the change that you wish to see in the world.",
             source: "Mahatma Gandhi",
             category: "Philosophy"};
//Adding seventh quotes as an object in the curly braces
quotes[6] = {quote: "If you tell the truth, you don't have to remember anything.",
             source: "Mark Twain",
             category: "Memory"};
//Adding eigth quote as an object in the curly braces
quotes[7] = {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
             source: "Martin Luther King Jr.",
             category: "Love"};

// For debugging purposes, this code will log the quotes array to the console.
console.log(quotes);

// The number of times that printQuote needs to change through before all quotes are used
var times = quotes.length

// This is another global array which will have the quote objects that have already been viewed once
var quotesOther = [];

function getRandomQuote (a,b, number) {
  // this checks if other array full
if (b.length < number) {
  // Picks random number based on quote array element length
  var num = Math.floor(Math.random() * a.length);
  //Move it out of the quotes array and then assign it to the name variable
  var qu = a.splice(num,1);
  // this pushes the qu variable into the other array
  b.push(qu[0]);
  // Returns the quote object from the function, making sure none are duplicated until all are used
  return qu[0];
}
// When the other array is then full
else {
  //picks a random number that is based on the length of the other array, which is full
  var numb = Math.floor(Math.random() * b.length);
  // This assigns the quote to a variable based upon a random number that is selected
  var qub = b[numb];
  // then returns he quote
  return qub;
  }
};

// Defines the printQuote function
function printQuote(){
  
}

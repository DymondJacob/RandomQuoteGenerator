// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// Start of Code

// JS Button click to execute printQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// strict (Good to use)


'use strict'

// The array that will contain the Quotes
var quotes = [];

// Adding First quote as an object in the curly braces
quotes[0] = {quote: "Moral indignation is jealousy with a halo.",
             source: "H.G. Wells, ",
             category: " Literature"};
// Adding Second quote as an object in curly braces
quotes[1] = {quote: "Be yourself; everyone else is already taken.",
             source: "Oscar Wilde, ",
             category: " Literature"};
//Adding Third quote as an object in the curly braces
quotes[2] = {quote: "So many books, so little time.",
             source: "Frank Zappa, ",
             category: " Humor"};
//Adding Fourth quote an object in the curly braces
quotes[3] = {quote: "A room without books is like a body without a soul",
             source: "Marcus Tullius Cicero, ",
             category: " Soul"};
//Adding Fifth quote as an object in the curly braces
quotes[4] = {quote: "You only live once, but if you do it right, once is enough.",
             source: "Mae West, ",
             category: " Life"};
//Adding sixth quote as an object in the curly braces
quotes[5] = {quote: "Be the change that you wish to see in the world.",
             source: "Mahatma Gandhi, ",
             category: " Philosophy"};
//Adding seventh quote as an object in the curly braces
quotes[6] = {quote: "If you tell the truth, you don't have to remember anything.",
             source: "Mark Twain, ",
             category: " Memory"};
//Adding eigth quote as an object in the curly braces
quotes[7] = {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
             source: "Martin Luther King Jr., ",
             category: " Love"};

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
  var ou = a.splice(num,1);
  // this pushes the ou variable into the other array
  b.push(ou[0]);
  // Returns the quote object from the function, making sure none are duplicated until all are used
  return ou[0];
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
function printQuote() {
// Uses the getRandomQuote function to get a random quote object from the auotes array
var randomQuote = getRandomQuote(quotes, quotesOther, times);
//Debugging, console.log();
console.log(quotes);
//Debugging
console.log(quotesOther);
//Consturct an html statement from string text and the quote object, starting off with quote and source
var quoteString = "<p class='quote'>";
quoteString += randomQuote.quote;
quoteString += "<p> <p class='source'>";
quoteString += randomQuote.source;
//citation is optional field so html text will only be added if the citation field is present
if (typeof randomQuote.citation != "undefined") {
  quoteString += "<span class='citation'>"
  quoteString += randomQuote.citation;
  quoteString += "</span>";
};
//year is an optional field so the html text will only be added if the ciation field is present
if (typeof randomQuote.year != "undefined"){
  quoteString += "<span class='year'>";
  quoteString += randomQuote.year;
  quoteString += "</span>";
};
//category is an additonal optional field so the html text will only be added if the citation field is present
if (typeof randomQuote.category != "undefined") {
  quoteString += "<span class=' category'>";
  quoteString += randomQuote.category;
  quoteString += "</span>";
};
quoteString += "</p>"
//inesrt the constructed html string into the document
document.getElementById('quote-box').innerHTML = quoteString;
//produces a random color for body background color
function getRandomColourBackground(){
  // create an array of HEX characters
  var hexadecscale = "0123456789AVCDEF".split('');
  // hexidecimal quoteString
  var hexadec = '#';
  var i = 0
  while (i<6) {
    //picks a hex character and adds it to the hexdec String
    hexadec += hexadecscale[Math.floor(Math.random() * 16)];
    i += 1;
  }
  // to make sure color works, console.log color
  console.log(hexadec);
  //set body background color
  document.body.style.backgroundColor = hexadec;
}
//random colour generator for button background color, makes it look nicer
function getRandomColourbutton(){
  //Array of hexadecimal characters
  var hexadecscale = "0123456789ABCDEF".split('');
  // hexidecimal String
  var hexadec = '#';
  var i = 0;
  while (i<6) {
    hexadec += hexadecscale[Math.floor(Math.random() * 16)];
    i += 1;
  }
  //console.log the color to make sure that it is working
  console.log(hexadec);
  //sets the background colour
  document.getElementById("loadQuote").style.backgroundColor = hexadec;
  }

//call function
getRandomColourBackground();
// call function
getRandomColourButton();
}

//call printQuote function upon initial page load
printQuote();
// call function after set interval of time which is 10 seconds
setInterval('printQuote()', 10000);

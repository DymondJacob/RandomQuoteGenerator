// Start of Code

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// This array that will contain the Quotes for the random quote generator
var quotes = [];

// Adding the First quote as an object
quotes[0] = {quote: "Moral indignation is jealousy with a halo.",
             source: "H.G. Wells, ",
             category: " Literature"};
// Adding the Second quote as an object
quotes[1] = {quote: "Be yourself; everyone else is already taken.",
             source: "Oscar Wilde, ",
             category: " Literature"};
// Adding the Third quote as an object
quotes[2] = {quote: "So many books, so little time.",
             source: "Frank Zappa, ",
             category: " Humor"};
// Adding the Fourth quote an object
quotes[3] = {quote: "A room without books is like a body without a soul",
             source: "Marcus Tullius Cicero, ",
             category: " Soul"};
// Adding the Fifth quote as an object
quotes[4] = {quote: "You only live once, but if you do it right, once is enough.",
             source: "Mae West, ",
             category: " Life"};
// Adding the sixth quote as an object in the curly braces
quotes[5] = {quote: "Be the change that you wish to see in the world.",
             source: "Mahatma Gandhi, ",
             category: " Philosophy"};
// Adding the seventh quote as an object in the curly braces
quotes[6] = {quote: "If you tell the truth, you don't have to remember anything.",
             source: "Mark Twain, ",
             category: " Memory"};
// Adding the eigth quote as an object in the curly braces
quotes[7] = {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
             source: "Martin Luther King Jr., ",
             category: " Love"};

//  I add this here for debugging purposes, the code below logs the quotes array
console.log(quotes);

// The number of times that printQuote needs to change through before all quotes are used
var quoteTimes = quotes.length

// Global array which will have the quote objects that have already been viewed once
var quotesOther = [];

function getRandomQuote (a,b, number) {
  // this checks if other array full
if (b.length < number) {
  // Picks random number based on quote array element length
  var num = Math.floor(Math.random() * a.length);
  //Move it out of the quotes array and then assign it to the name variable
  var ad = a.splice(num,1);
  // this pushes the ou variable into the other array
  b.push(ad[0]);
  // Returns the quote object from the function, making sure none are duplicated until all are used
  return ad[0];
}
// When the other array is then full
else {
  //picks a random number that is based on the length of the other array, which is full
  var number = Math.floor(Math.random() * b.length);
  // This assigns the quote to a variable based upon a random number that is selected
  var abc = b[number];
  // then returns the quote
  return abc;
  }
};

// Defines the printQuote function
function printQuote() {
// Uses the getRandomQuote function to get a random quote object from the auotes array
var randomQuote = getRandomQuote(quotes, quotesOther, quoteTimes);
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
// random colour generator for button background color, it will make it look nicer, an extra touch
function getRandomColourbutton(){
  //Array of the hexadecimal characters
  var hexadecscale = "0123456789ABCDEF".split('');
  // the hexidecimal string
  var hexadec = '#';
  var i = 0;
  while (i<6) {
    hexadec += hexadecscale[Math.floor(Math.random() * 16)];
    i += 1;
  }
  // console.log the color to make sure that it is working
  console.log(hexadec);
  // sets the background colour
  document.getElementById("loadQuote").style.backgroundColor = hexadec;
  }

//call function
getRandomColourBackground();
// call function
getRandomColourButton();
}

//calls printQuote function when the page is first loaded
printQuote();
// call function after set interval of time which is 30 seconds
setInterval('printQuote()', 30000);

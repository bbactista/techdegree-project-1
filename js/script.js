/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The `quotes` array that stores the quotes used .
***/

const quotes = [
  {
    quote: 'Try not to become a man of success, but rather try to become a man of value.',
    source: 'Albert Einstein',
    citation: 'Goalcast',
    tags: 'motivational'
  },
  {
    quote: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.',
    source: 'John Maxwell'
  },
  {
    quote: 'Do, or do not. There is no “try”.',
    source: 'Master Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: 1980
  },
  {
    quote: 'Oh yes, the past can hurt. But you can either run from it, or learn from it.',
    source: 'Rafiki',
    citation: 'The Lion King',
    year: 1994
  },
  {
    quote: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    source: 'Henry Ford',
    citation: 'BrainyQuote',
    tags: 'motivational'
  },
];

printQuote(); //Calling `printQuote` function earlier so that a random quote will appear when first visiting site or refreshing.

/***
 * The `getRandomQuote` function will produce a random number, then return that random number as an object from the quotes array.
***/

function getRandomQuote () {

  let i = Math.floor(Math.random() * quotes.length); //Random number generator
  let quote = quotes[i]; 
 
  if (i !== quotes[i]) {
    return quote;
  }
}

/***
 * The `printQuote` function will take the randomly generated quote and display it for the user.
***/

function printQuote() {
  
  let randomQuote = getRandomQuote();

  let html = '';

  html += ` 
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `; //Displays quote and source by default
  
  if (randomQuote.year) { //Displays year w/ citation.
    html += `
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
      </p>
    `;
  } else if (randomQuote.tags) { //Displays tags w/ citation.
    html += `
        <span class="citation">${randomQuote.citation}</span>
        <span class="tags"> Tags: ${randomQuote.tags}</span>
      </p>
    `;
  } else if (randomQuote.citation) { //Displays citation.
    html += `
        <span class="citation">${randomQuote.citation}</span>
      </p>
    `;
  } 

  random_bg_color();//Random background color function for every random quote.

  return document.getElementById('quote-box').innerHTML = html; //returns the printed html
}

function random_bg_color() { 
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
} // Source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

setInterval(printQuote, 20000); //Shows a new quote and background color every 20 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
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
    tags: 'motivational',
  },
  {
    quote: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.',
    source: 'John Maxwell',
  },
  {
    quote: 'Do, or do not. There is no “try”.',
    source: 'Master Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: 1980,
  },
  {
    quote: 'Oh yes, the past can hurt. But you can either run from it, or learn from it.',
    source: 'Rafiki',
    citation: 'The Lion King',
    year: 1994,
  },
  {
    quote: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    source: 'Henry Ford',
    citation: 'BrainyQuote',
    tags: 'motivational',
  },
  {
    quote: 'I’ve failed over and over and over again in my life. And that is why I succeed.',
    source: 'Michael Jordan',
  },
  {
    quote: 'Don’t let your victories go to your head, or your failures go to your heart.',
    source: 'Anonymous',
  },
  {
    quote: 'Don’t wish it were easier; wish you were better.',
    source: 'Jim Rohn',
  }
];

printQuote(); //Calling `printQuote` function up here so that a random quote will appear when first visiting site or refreshing.

/***
 * The `getRandomQuote` function will produce a random number, then return that random number as an object from the quotes array.
***/

function getRandomQuote (arr) {

  let random = arr[Math.floor(Math.random() * arr.length)]; //Random number generator
  return random;

}

/***
 * The `printQuote` function will take the randomly generated quote and display it for the user.
***/

function printQuote() {
  
  let randomQuote = getRandomQuote(quotes);

  let html = '';

  if (randomQuote.year) { //If random object includes the year, then it will display everything.
    html += `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
      </p>
    `;
  } else if (randomQuote.tags) {
    html += `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="tags"> Tags: ${randomQuote.tags}</span>
      </p>
    `;
  } else if (randomQuote.citation) { //If random object just includes the citation w/ no year, then it will display everything minus the year.
    html += `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
      </p>
    `;
  } else { //If there's no citation or year available, then it will only display quote and source
    html += `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}</p>
    `;
  }
  
  function random_bg_color() { //Random background color for every random quote.
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  }
  random_bg_color();
  //Random background color function pulled from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
  
  return document.getElementById('quote-box').innerHTML = html; //returns the printed html

}

setInterval(printQuote, 20000); //Shows a new quote every 20 seconds

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
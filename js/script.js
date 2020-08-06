/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Try not to become a man of success, but rather try to become a man of value.',
    source: 'Albert Einstein',
    citation: 'Goalcast',
  },
  {
    quote: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.',
    source: 'John Maxwell',
  },
  {
    quote: 'Do, or do not. There is no “try”.',
    source: 'Master Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: '1980',
  },
  {
    quote: 'Oh yes, the past can hurt. But you can either run from it, or learn from it.',
    source: 'Rafiki',
    citation: 'The Lion King',
    year: '1994',
  },
  {
    quote: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    source: 'Henry Ford',
    citation: 'BrainyQuote',
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


/***
 * `getRandomQuote` function
***/

function getRandomQuote (arr) {

  let random = arr[Math.floor(Math.random() * arr.length)];

  return random;

}

/***
 * `printQuote` function
***/

function printQuote() {
  
  let randomQuote = getRandomQuote(quotes);

  let quote = `${randomQuote.quote}`;
  let source = `${randomQuote.source}`;

  if (randomQuote.citation) {
    let html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
      <span class="citation">${randomQuote.citation}</span>
    </p>
    `;
  } else if (randomQuote.year) {
    let html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
      <span class="citation">${randomQuote.citation}
      <span class="year">${randomQuote.year}</span>
    </p>
    `;
  } else {
    let html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
    `;
  }

  document.getElementById('quote-box').innerHTML = html; 

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
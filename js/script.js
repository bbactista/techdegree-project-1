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
    quote: 'Start where you are. Use what you have. Do what you can.',
    source: 'Arthur Ashe',
  },
  {
    quote: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.',
    source: 'John Maxwell',
  },
  {
    quote: 'Good things come to people who wait, but better things come to those who go out and get them.',
    source: 'Anonymous',
  },
  {
    quote: 'I find that the harder I work, the more luck I seem to have.',
    source: 'Thomas Jefferson',
  },
  {
    quote: 'Failure is the opportunity to begin again more intelligently.',
    source: 'Henry Ford',
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
  
  let i = getRandomQuote(quotes);

  let quote = `${i.quote}`;
  let source = `${i.source}`;

  let html = `
    <p class="quote"> ${i.quote} </p>
    <p class="source"> ${i.source}
      <span class="citation"> quote citation </span>
      <span class="year"> quote year </span>
    </p>
  `;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
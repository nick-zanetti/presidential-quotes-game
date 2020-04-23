const quotes = [{
  president: "Barack Obama",
  quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek",
},{
  president: "Barack Obama",
  quote: "If you walk down the right path, and you're willing to keep walking, eventually you'll make progress",
},{
  president: "Donald Trump",
  quote: "I have a great relationship with the blacks."
},{
  president: "Donald Trump",
  quote: "I will build a great wall--and nobody builds walls better than me, believe me--and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words",
},{
  president: "George W. Bush",
  quote: "I can hear you, the rest of the world can hear you and the people who knocked these buildings down will hear all of us soon",
},{
  president: "George W. Bush",
  quote: "America must not ignore the threat gathering against us. Facing clear evidence of peril, we cannot wait for the final proof, the smoking gun that could come in the form of a mushroom cloud",
},{
  president: "Bill Clinton",
  quote: "There is nothing wrong with America that cannot be cured by what is right with America",
},{
  president: "Bill Clinton",
  quote: "I did not have sexual relations with that woman",
},{
  president: "George H.W. Bush",
  quote: "Read my lips: no new taxes",
},{
  president: "George H.W. Bush",
  quote: "I think I'd be a better president because I was in combat",
},{
  president: "Ronald Reagan",
  quote: "General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization, come here to this gate. ... Mr. Gorbachev, tear down this wall",
},{
  president: "Ronald Reagan",
  quote: "I will not make age an issue of this campaign. I am not going to exploit, for political purposes, my opponent's youth and inexperience",
},{
  president: "Jimmy Carter",
  quote: "It is good to realize that if love and peace can prevail on earth, and if we can teach our children to honor nature's gifts, the joys and beauties of the outdoors will be here forever",
},{
  president: "Jimmy Carter",
  quote: "Testing oneself is best when done alone",
},{
  president: "Richard Nixon",
  quote: "When the President does it, that means it's not illegal",
}, {
  president: "Richard Nixon",
  quote: "A man is not finished when he is defeated. He is finished when he quits.",
}]

const quotesBox = document.querySelector('#quote-box')
const guessButtons = document.getElementsByClassName('guess-button')
const resultBox = document.querySelector('#result-box')
const resetButton = document.querySelector('#reset')

//Populate the quote box with a random quote from the array
const randomQuote = quotes[(Math.floor(Math.random() * quotes.length))]
quotesBox.textContent = `"${randomQuote.quote}"`


//loop which adds an event listener to every item in the guessButtons collection
for (var i = 0; i < guessButtons.length; i++) {
  guessButtons[i].addEventListener('click', (e) => {
    makeGuess(e.target.innerText)
  });
}

//Function to handle making the guess
const makeGuess = (buttonText) => {
  if (buttonText === randomQuote.president) {
    resultBox.textContent = 'Correct!'
    
  } else if (buttonText !== randomQuote.president) {
    resultBox.textContent = 'Incorrect! Try again'
    
  }
}

resetButton.addEventListener('click', function(){location.reload()});
resetButton.addEventListener('click', location.reload.bind(location));










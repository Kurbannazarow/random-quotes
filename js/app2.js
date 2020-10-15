(function generateQuote() {

const quotes = [
  {
    qut: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life"
  },
  {
    qut:  "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith"
  },
  {
    qut:  "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars "
  },
  {
    qut: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau"
  },
  {
    qut: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh"
  },
  {
    qut: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly"
  }
];

  const quote = document.querySelector('#quote')
  const generateBtn = document.querySelector('#generate-btn')
  const author = document.querySelector('[data-author]')

  generateBtn.addEventListener('click', generate)

  function generate(event) {
    event.preventDefault()
    const count = Math.trunc(Math.random() * quotes.length)
    quote.textContent = quotes[count].qut
    author.textContent = quotes[count].author
  }
})()
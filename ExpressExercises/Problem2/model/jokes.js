var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];

module.exports = {
  allJokes : jokes,
  getRandomJoke : _getRandomJoke,
  addJoke : _addJoke
}

function _getRandomJoke(){
    var lengthofjokes = jokes.length;
    var randomJoke = { joke : jokes[Math.floor((Math.random() * lengthofjokes))]};
    return randomJoke;
}

function _addJoke(joke){
    jokes.push(joke);
}
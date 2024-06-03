var quotes = [
  "Life is a sleazy stranger, who looks vaguely familiar; flirting with a bimbo named disaster at the end of the bar.",
  "Live your life to the fullest. You only get one.",
  "Life has no limitations except the ones you make.",
  "Life’s like photography, you use the negatives to develop.",
  "No other animal knows the difference between Friday and Monday.",
  "I have a theory that the answers to all of life’s major questions can found in a John Mayer song.",
  "I’d rather be weird and happy than normal and miserable.",
  "The purpose of life is a life of purpose.",
  "You don’t know what beauty is. You use the word, certainly, but your word is empty. Beauty is known only by one who has known the inner beauty, one who has known the inner flower opening. Then whenever a flower is seen, it reminds you of your inner beauty.",
  "It’s not the length of life, but the depth of life.",
  "Knowledge, if wisely paired with action, builds an indestructible bridge to success.",
  "Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us.",
  "Life is about not knowing, having to change, taking a moment and making the best of it.",
  "In the game of life it’s a good idea to have a few early losses, which relieves you of the pressure of trying to maintain an undefeated season.",
  "It’s the only real advantage to getting older. You get to say what you mean and stop apologizing.",
  "Listen to your own voice, your own soul, too many people listen to the noise of the world, instead of themselves.",
  "People build too many walls and not enough bridges.",
  "Life is about feeling someone pushing you from behind and realizing it’s you.",
  "Remain calm in every situation because peace equals power.",
  "We almost always see only what’s wrong with other people and not what’s wrong with us.",
  "It is never too late to make things right.",
  "There’s only 2 options: Make progress or make excuses.",
  "The rain WILL stop, the night WILL end, the hurt WILL fade. Hope is never so lost that it can’t be found.",
  "The moment you feel like you have to prove your worth to someone is the moment to absolutely and utterly walk away.",
  "A good relationship is worth the wait.",
  "Be thankful for everybody in your life, good and bad, past and present. They all made you the person that you are today.",
  "It all begins and ends in your mind. What you give power to, has power over you, if you allow it.",
];

var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

$('.btn').on('click', function () {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    $('h3').text(randomQuotes);
    console.log(randomQuotes); 
})

function animatePress(currentColor) {
    $(".btn" + currentColor).addClass("pressed");
    setTimeout(function () {
      $(".btn" + currentColor).removeClass("pressed");
    }, 100);
  }
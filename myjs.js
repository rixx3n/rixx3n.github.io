
$("#new-quote").click(function(){
    let a= randomizer()
    let b= randomizer2()
    
    $("span,.fa-quote-left").animate({"opacity": 0},500,function(){
        $("#text").html(quotes[b].quote)
        $("#authormube").html(quotes[b].author)
    $("span,.fa-quote-left").animate({"opacity": 1},500)});
        
    $("body,button").animate({"backgroundColor": colors[a]},1000);
    $(".fa-quote-left,span").animate({"color": colors[a]},1000);

    let currentAuthor = quotes[b].author
    let currentQuote = quotes[b].quote
    

    $('.fa-twitter').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=none&text=' +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    
      $('.fa-tumblr').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,none&caption=' +
          encodeURIComponent(currentAuthor) +
          '&content=' +
          encodeURIComponent(currentQuote) +
          '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')
  }); 
  
  function myfunction(){
    let a= randomizer()
    
    $("span,.fa-quote-left").animate({"opacity": 0},500,function(){
        $("#text").html(quotes[Math.floor(Math.random()*quotes.length)].quote)
        $("#authormube").html(quotes[Math.floor(Math.random()*quotes.length)].author)
    $("span,.fa-quote-left").animate({"opacity": 1},500)});
        
    $("body,button").animate({"backgroundColor": colors[a]},1000);
    $(".fa-quote-left,span").animate({"color": colors[a]},1000);
    
    let currentAuthor = quotes[b].author
    let currentQuote = quotes[b].quote
    

    $('.fa-twitter').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=none&text=' +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    
      $('.fa-tumblr').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,none&caption=' +
          encodeURIComponent(currentAuthor) +
          '&content=' +
          encodeURIComponent(currentQuote) +
          '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')

  }
  
  let colors=[
    "#C5492E",
    "#F6F942",
    "#47F942",
    "#42F9F9",
    "#4255F9",
    "#CC42F9",
    "#FF2178",
    "#FF2121",
    "#0800FF"
  ]

  function randomizer() {
  let randomColor = Math.floor(Math.random()*colors.length)
  return randomColor
  }
  function randomizer2(){
    let random= Math.floor(Math.random()*quotes.length)
    return random
  }
  

  

  let quotes=[
    {quote: 'Life isn’t about getting and having, it’s about giving and being.', author: 'Kevin Kruse'},
    {quote: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill'},
    {quote: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    {quote: 'Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.', author: 'Robert Frost'},
    {quote: 'I attribute my success to this: I never gave or took any excuse.', author: 'Florence Nightingale'},
    {quote: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky'},
    {quote: 'I’ve missed more than 9000 shots in my career. I’v…over again in my life. And that is why I succeed.', author: 'Michael Jordan'},
    {quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    {quote: 'Every strike brings me closer to the next home run.', author: 'Babe Ruth'},
    {quote: 'Definiteness of purpose is the starting point of all achievement.', author: 'W. Clement Stone'},
{quote: 'Too many of us are not living our dreams because we are living our fears.', author: 'Les Brown'},
{quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', author: 'Joshua J. Marine'},
{quote: 'If you want to lift yourself up, lift up someone else.', author: 'Booker T. Washington'},
{quote: 'I have been impressed with the urgency of doing. K…t apply. Being willing is not enough; we must do.', author: 'Leonardo da Vinci'},
{quote: 'Limitations live only in our minds.  But if we use…imaginations, our possibilities become limitless.', author: 'Jamie Paolinetti'},
{quote: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.', author: 'Erica Jong'},
{quote: 'What’s money? A man is a success if he gets up in …at night and in between does what he wants to do.', author: 'Bob Dylan'},
{quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.', author: 'Benjamin Franklin'},
{quote: 'In order to succeed, your desire for success should be greater than your fear of failure.', author: 'Bill Cosby'},
{quote: 'A person who never made a mistake never tried anything new.', author: ' Albert Einstein'},
{quote: 'The person who says it cannot be done should not interrupt the person who is doing it.', author: 'Chinese Proverb'},
{quote: 'There are no traffic jams along the extra mile.', author: 'Roger Staubach'},
{quote: 'It is never too late to be what you might have been.', author: 'George Eliot'},
{quote: 'You become what you believe.', author: 'Oprah Winfrey'},
{quote: 'I would rather die of passion than of boredom.', author: 'Vincent van Gogh'},
{quote: 'A truly rich man is one whose children run into his arms when his hands are empty.', author: 'Unknown'},
{quote: 'It is not what you do for your children, but what …ves, that will make them successful human beings.', author: 'Ann Landers'},
{quote: 'If you want your children to turn out well, spend …e as much time with them, and half as much money.', author: 'Abigail Van Buren'},
{quote: 'Build your own dreams, or someone else will hire you to build theirs.', author: 'Farrah Gray'},
{quote: 'The battles that count aren’t the ones for gold me…le battles inside all of us–that’s where it’s at.', author: 'Jesse Owens'},
{quote: 'Education costs money.  But then so does ignorance.', author: 'Sir Claus Moser'}
    ];

    
   
      
      
    document.addEventListener("DOMContentLoaded", function() {
       myfunction();
      });
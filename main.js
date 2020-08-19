// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let event;

document.querySelector('div#modal').className = 'hidden';

document.addEventListener('DOMContentLoaded', ()=>{
  const hearts = document.querySelectorAll('span.like-glyph');
  for (const heart of hearts){
    heart.addEventListener('click', e =>{
      // error appear
      // error message
      // remove hidden
      // setTimeout to hide
      event = heart
      mimicServerCall().then(() => {
        if (heart.textContent == EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.className = 'activated-heart';
        }else{
           heart.innerText = EMPTY_HEART;
           heart.className = '';
        }
      }).catch(err => {

      })
    })
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

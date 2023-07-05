let selectedRating = null; // Variable to store the selected rating

function sendRating() {
  event.preventDefault(); // Prevent form submission
  if (selectedRating !== null) {
    const myString = `\n\n <span> Thank you!</span> \n\nWe appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    let notification = document.getElementById('notification');
    let ratingelts = document.getElementById('idrating') ;
    notification.innerHTML = myString;
    notification.setAttribute( 'class', 'text-center' );
    document.querySelector('h1').innerHTML =`<img src="./images/illustration-thank-you.svg" alt="">`;
    document.querySelector('h1').setAttribute( 'class', 'text-center' );
    ratingelts.innerHTML = `You selected ${selectedRating} out of 5;`
    ratingelts.setAttribute( 'class', 'onlyJs' );
    document.querySelector(`input[type='submit']`).setAttribute( 'class', 'hidden' );
    document.querySelector(`div.container`).setAttribute( 'class', 'hidden' );
    document.querySelector(`div.image`).setAttribute( 'class', 'hidden' );
}

}

document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.matches('.container div')) {
    selectedRating = target.textContent;
  }
});

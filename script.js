let selectedRating = null; // Variable to store the selected rating

function sendRating() {
  event.preventDefault(); // Prevent form submission
  if (selectedRating !== null) {
    const myString = `\n\n <span> Thank you!</span> \n\nWe appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    document.getElementById('notification').innerHTML = myString;
    document.getElementById('notification').setAttribute( 'style', 'text-align:center' );
    document.querySelector('h2').innerHTML =`<img src="./images/illustration-thank-you.svg" alt="">`;
    document.getElementById('idrating').innerHTML = `You selected ${selectedRating} out of 5;`
    document.getElementById('idrating').setAttribute( 'class', 'onlyJs' );
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

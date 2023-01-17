const btn = document.getElementById('btn');
const btnContainer = document.getElementById('btn-container');
const rateNumber = document.getElementById('rate-number');
const btnSubmit = document.getElementById('btn-submit');
const cardRate = document.getElementById('rating-card');
const cardThanks = document.getElementById('section-thanks');

btnContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected >0  || numberSelected <= 5){
        btnSubmit.addEventListener('click', ()=>{
            cardRate.style.display = 'none';
            cardThanks.style.display = 'flex';
        });
    }
});





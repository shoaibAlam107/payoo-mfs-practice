// add money to the account
// step-1 add an event handler to the add money button.

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
//     // prevent page reload.
    event.preventDefault();
    
    // step-2 get money to be added to the account.
    const addMony =document.getElementById('input-add-money').value;
    console.log(addMony);
    // get pin number provided.
    const inputPin =document.getElementById('input-pin-number').value;
    console.log(inputPin);

});



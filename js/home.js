// add money to the account
// step-1 add an event handler to the add money button.

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
//     // prevent page reload.
    event.preventDefault();
    
    // step-2 get money to be added to the account.
    const addMoney =document.getElementById('input-add-money').value;
    const  inputAddMoney =parseFloat(addMoney)
    console.log(inputAddMoney);

    // get pin number provided.
    const inputPin =document.getElementById('input-pin-number').value;
    // console.log(inputPin);
    


    // step-3 verify pin number.
    // wrong way to verify.
    if( inputPin === '2222'){
            // console.log('adding money to your account');

             //  step-4 get the current balance .(it's not a input field,so it's value provided by {.innerText} not {.value}).

        const mainBalance = document.getElementById('main-balance').innerText;
        const currentBalance = parseFloat(mainBalance)
        console.log(currentBalance);

        // step-5 add money with main balance. 

        const newBalance = currentBalance + inputAddMoney;
        console.log(newBalance);

        // step-6 update balance inn the UI/DOM.
        document.getElementById('main-balance').innerText =  newBalance;

     } 
     else{
        alert('failed add money! plz try again')
     }

   


 
});



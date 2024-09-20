// console.log('button clicking file added')

// document.getElementById('Id').addEventListener('click',function(){})
   

// step-1 set event handler 

document.getElementById('btn-login')
.addEventListener('click',function(event){ 
    
    // step-2 prevent default (prevent reloading browser)
    event.preventDefault(); // <----vejal lagbe janar jonno just---->
    // console.log('login button clicked');

    // step-3 get the phone number and the pin number
    const phoneNumber = document.getElementById('phn-num').value;
    const passNumber = document.getElementById('pass-number').value;
    console.log(phoneNumber , passNumber);
    
    // this is temporary ,you should not do like this.
    // step-4 validate phone and pin.

    if( phoneNumber === '2024' && passNumber === '2222'){
        console.log('you are logged in');
        window.location.href = 'home.html';
        // step-5 alow user to use website
    }
    else{
        alert('wrong phn or pin')
    }

});
// console.log('button clicking file added')

// document.getElementById('Id').addEventListener('click',function(){})
   

// step-1 set event handler 

document.getElementById('btn-login').addEventListener('click',function(event){ 
    
    // step-2 prevent default (prevent reloading browser)
    event.preventDefault(); // <----vejal lagbe janar jonno just---->
    // console.log('login button clicked');

    // step-3 get the phone number
    const phoneNumber = document.getElementById('phn-num').value;
    const passNumber = document.getElementById('pass-number').value;
    console.log(phoneNumber , passNumber);

    if( phoneNumber === '2024' && passNumber === '2222'){
        console.log('login')
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phn or pin')
    }

})
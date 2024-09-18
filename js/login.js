// console.log('button clicking file added')

// document.getElementById('Id').addEventListener('click',function(){})
   

// step-1 set event handler 

document.getElementById('btn-login').addEventListener('click',function(event){ 
    
    // step-2 prevent default (prevent reloading browser)
    event.preventDefault(); // <----vejal lagbe janar jonno just---->
    console.log('login button clicked');

    // step-3 get the phone number
    const phoneNumber = document.getElementById('phn-num').value;
    console.log(phoneNumber);

})
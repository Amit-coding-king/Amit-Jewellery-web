let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('login-btn');
 
btn.addEventListener('click', function(){
    let data={
        email:'amit1234@gmail.com',
        password:'1234'
    }
    let usertypemail=email.value;
    let usertypepassword=password.value;
    if(usertypemail===data.email && usertypepassword===data.password){
        alert('login is succes')
        error.innerHTML=' login succes'
        window.location.href = 'C:/Users/kc/Desktop/Advanc Web/HTML/AmitJwelary/amit.html';


    }else{
        error.innerHTML=' *invailid Email Or Password '
    }

})

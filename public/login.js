const userName = 'repo';
const password = '123';

let btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click',() =>{
    let inputUserName = document.getElementById('login');
    let inputPassword = document.getElementById('password');
    let myUserName = inputUserName.value
    let myPassword = inputPassword.value

        if(myUserName==userName && myPassword==password){
            window.location.href = 'index.html';
        } else if(myUserName !== userName){
            alert('Your user name is unknow')
        }else if(myPassword !== password){
            alert('Your password is wrong')
        }else{
            alert('Your User Name and Password are wrong')
        }
})

function RegisterSubmit(){

const users = JSON.parse(localStorage.getItem('Users')) || [];    

const username = document.getElementById("registerUsername").value;

const phone = document.getElementById("registerPhone").value;

const email = document.getElementById("registerEmail").value;

const password = document.getElementById("registerPassword").value;

var userdata = {username:username,phone:phone,email:email,password:password};

users.push(userdata);

localStorage.setItem('Users', JSON.stringify(users));

}

function loginSubmit(e){
e.preventDefault();

    const form = document.getElementById("loginForm");

    const username = form.loginName.value;
    
    const password = form.loginPassword.value;

    var users = JSON.parse(localStorage.getItem('Users'));

    for(let i = 0; i < users.length; i++) {

        let u = users[i].username;
        
        let p = users[i].password;

        if(u === username && p === password){

            window.location.href = "home.html";
            break;
    
        }else{

            alert("Invalid credentials");
            break;

        }
    }

}

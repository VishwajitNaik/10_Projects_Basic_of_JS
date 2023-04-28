function validate() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Cpassword = document.getElementById('Cpassword').value;

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password, Cpassword)
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML = ''
    }else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = "Please enter a valid username"

    }
}

function checkemail(email){
    if(email.length > 8 && email.includes('@gmail.com')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML = ''
    }else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText = "Please enter a valid email (e.g. user@gmail.com)"

    }
    
}

function checkpassword(password){
    if(password.length > 8 && password.includes('@') ){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerHTML = ''
    }else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText = "Please enter a valid password (must be at least 8 characters long and contain the @ symbol)"

    }
        
}

function checkpasswordmatch(password, Cpassword){
    if(password === Cpassword){
        document.getElementById('Cpassword').classList.add('success')
        document.getElementById('Cpassword').classList.replace('error', 'success')
        document.getElementById('confirmpassword_error').innerHTML = ''
    }else{
        document.getElementById('Cpassword').classList.add('error')
        document.getElementById('confirmpassword_error').innerText = "Passwords do not match"

    }
}

// var users = "priti@gamil.com";
// var pass = "12345";
function getInfo() {

  // event.preventDefault();
  //console.log(true);
  var username = document.getElementById("username").value;
  
  var password = document.getElementById("password").value;
 
    
  
    if ((username === 'user1' && password === 'password1')||(username === 'user2' && password === 'password2')||(username === 'user3' && password === 'password3'))
       {
        // alert("Login successful!");
      
      window.location.assign('/admin');
      
    }
    else {
      alert('user or pass is invalid');
    }

  };




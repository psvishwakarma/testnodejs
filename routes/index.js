// var users = "priti@gamil.com";
// var pass = "12345";
function getInfo() {

  // event.preventDefault();
  //console.log(true);
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;

  // var credentials = [
  //   { Username: "user1", Password: "password1" },
  //   { Username: "user2", Password: "password2" },
  //   { Username: "user3", Password: "password3" }
  // ];
  // for (var i = 0; i < credentials.length; i++) {
    if ((Username === 'user1' && Password === 'password1')||(Username === 'user2' && Password === 'password2')||(Username === 'user3' && Password === 'password3'))
      {
      alert("Login successful!");
      window.location.assign('/admin');
      
    }
    else {
      alert('user or pass is invalid');
    }

  };




if(sessionStorage.getItem('flag')){
    console.log(flag,'true');
    window.location.href = "/";
}

var time = 0;
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

window.onmousemove = function () { time = 0; }
window.onkeypress = function () { time = 0; }
const int = setInterval(function () {
    time++;
    if (time > 5) {
        clearInterval(int);
        sessionStorage.clear();
       myModal.show();
        // myModal.addEventListener('shown.bs.modal', () => {
        //     myInput.focus()
        //   })

    }
}, 1000);

if(sessionStorage.getItem("")){
   redirect();

}

function login() {
    window.location.href = "/";

   

}
function redirect(){
    window.location.href = "/"; 
}

// document.querySelector("#closeModal").addEventListener("click",() => {
//     window.location.href = "/"

// });
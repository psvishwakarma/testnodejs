
function getdata() {

    // console.log("sdcfdf");
    event.preventDefault()
    const form = document.querySelector('#form-data');

    const formdata = new FormData(form);

    console.log(formdata);
    

//     var Name = document.getElementById('name').value
//     var Add = document.getElementById('add').value
//     var Salary = document.getElementById('salary').value
//     var Mobileno = document.getElementById('mobileno').value
//     // var li = document.querySelector('li')​

//     const data = { Name, Add, Salary, Mobileno }

//     const handleFormData = async () => {
//         const sent = await fetch('/registration', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })

//         try {
//             const response = await sent.json()
//             li.textContent = `${response.Name} => ${response.Add},=> ${response.Salary},=> ${response.Mobileno}`
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     handleFormData();
// });

}
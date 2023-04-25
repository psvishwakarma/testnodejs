// const { application } = require("express");

function getdata() {

    // console.log("sdcfdf");
    event.preventDefault();
    const form = document.querySelector('#form-data');

    const formData = new FormData(form);
    const name = formData.get("name");
    const add= formData.get("add");
    const salary=formData.get("salary");
    const mobileno=formData.get("mobileno");
    // console.log(name);
    // console.log(add);
    // console.log(salary);
    // console.log(mobileno);
    // console.log('formData', form);
     

    

    fetch("/priti", {
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name,add,salary,mobileno}),
    })
    
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))
    // }

    // console.log(formData);





    //   var Name = document.getElementById('name').value
    //   console.log(Name);
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

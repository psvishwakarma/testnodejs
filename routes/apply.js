document.querySelector('Submit').addEventListener('click', (e) => {
    e.preventDefault()

    const Name = document.getElementById('Name').value
    const Add = document.getElementById('Add').value
    const Salary= document.getElementById('Salary').value
    const Mobileno = document.getElementById('Mobileno').value
    const li = document.querySelector('li')​

    const data = {Name,Add,Salary,Mobileno}

    const handleFormData = async () => {
       const sent = await fetch('/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        try {
            const response = await sent.json()
            li.textContent = `${response.Name} => ${response.Add},=> ${response.Salary},=> ${response.Mobileno}`
        } catch (error) {
           console.log(error)
        }
    }

    handleFormData();
});
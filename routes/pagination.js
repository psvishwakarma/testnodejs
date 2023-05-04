const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');

const rows = tbody.querySelectorAll('tr');
console.log("rows",rows);

const pagecount = Math.ceil(rows.length / 2);

function displayPage(page) {

    const startIndex = (page - 1) * 2;

    const endIndex = startIndex + 2;



    for (let i = 0; i < rows.length; i++) {

        const row = rows[i];

        if (i >= startIndex && i < endIndex) {

            row.style.display = 'table-row';
        }
        else {
            row.style.display = 'none';
        }
    }
}


function createPagination() {



    const pagination = document.getElementById('pagination');

    for (let i = 1; i <= pagecount; i++) {


        const button = document.createElement('button');
        button.textContent = i;


        button.addEventListener('click', () => {

            displayPage(i);
        });

        pagination.appendChild(button);

    }



}


displayPage(1);

createPagination();
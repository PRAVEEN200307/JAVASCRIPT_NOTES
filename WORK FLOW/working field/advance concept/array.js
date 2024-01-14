//Store array


const form = document.forms.todoApp
const inputEl = form.elements.foodNames
const submitBtn = document.querySelector('#submit-btn');
const foodList = document.querySelector('#food-list');

document.addEventListener('DOMContentLoaded', () => {
    loadstoredData();

    form.addEventListener('submit', handlesubmit);

    const editBtn = document.querySelectorAll('#editBtn');
    console.log(editBtn);
    editBtn.forEach(btn => {
        btn.addEventListener('click', handleEdit);
    })

    const deleteBtn = document.querySelectorAll('#delectBtn');
    deleteBtn.forEach(value => {
        value.addEventListener('click', handleDelete);
    })

});

function loadstoredData() {

    foodList.innerHTML = '';
    const productArrayList = JSON.parse(localStorage.getItem('getItems')) || [];

    productArrayList.forEach((value, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${value}
                <div>
                   <button id="editBtn" data-index=${index} >Edit</button>
                   <button id="delectBtn" data-index=${index} >Delect</button>
                 </div>`;

        foodList.appendChild(li);
    });
}

function addLocalStorage(data) {
    const productArrayList = JSON.parse(localStorage.getItem('getItems')) || [];

    productArrayList.push(data);
    const productjson = JSON.stringify(productArrayList);
    localStorage.setItem("getItems", productjson);
}

const handlesubmit = (e) => {
    e.preventDefault();
    const data = inputEl.value.trim();
    if (data !== '') {
        addLocalStorage(data);
        loadstoredData();
        inputEl.value = '';
    } else {
        alert('Please Enter The data');
        inputEl.focus();
    }
}


//handling edit button

const handleEdit = (e) => {
    const index = e.target.dataset.index
    const productArrayList = JSON.parse(localStorage.getItem('getItems')) || [];
    const editedName = prompt('Enter a your Name :', productArrayList[index]);

    if (editedName !== '') {
        productArrayList[index] = editedName;
        localStorage.setItem('getItems', JSON.stringify(productArrayList));
        loadstoredData();
    }
}

//handling delect button
const handleDelete = (e) => {
   if(confirm('Are you sure to Delete')){
    const index = e.target.dataset.index
    const productArrayList = JSON.parse(localStorage.getItem('getItems')) || [];
    productArrayList.splice(index, 1);

    localStorage.setItem('getItems', JSON.stringify(productArrayList));
    loadstoredData();
   }
}
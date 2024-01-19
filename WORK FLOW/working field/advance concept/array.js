//Store array of Objects

document.addEventListener('DOMContentLoaded', () => {
    const model = document.querySelector('.model');
    const closeBtn = document.querySelector('.close');
    const formEl = document.forms.dataForm;

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = formEl.elements;
        const fullName = form.nameInput.value.trim();
        const age = parseInt(form.ageInput.value);
        const gender = form.genderSelect.value;

        if (fullName !== '' && !isNaN(age) && gender !== '') {
            const user = {
                name: fullName,
                age,
                gender
            }
            addLocalStorage(user);
            loadStoredData();
            formEl.reset();
        } else {
            alert("Please fill all detail")
        }
    });

    const formEdit = document.forms.editDataForm;
    formEdit.addEventListener("submit", (e) => {
        e.preventDefault();

        const formElement = document.forms.editDataForm.elements;
        const index = formElement.editIndex.value
        const fullName = formElement.editNameInput.value
        const age = formElement.editAgeInput.value;
        const gender = formElement.editGenderSelect.value;

        if (fullName !== '' && !isNaN(age) && gender !== '') {
            const data = JSON.parse(localStorage.getItem('myData'));
            data[index].name = fullName;
            data[index].age = age;
            data[index].gender = gender;
            localStorage.setItem('myData', JSON.stringify(data));
            loadStoredData();
            model.style.display = 'none';
        }
        else {
            alert("Plese fill all detail");
        }

    });



    function addLocalStorage(user) {
        const storedData = JSON.parse(localStorage.getItem('myData')) || [];
        storedData.push(user);
        localStorage.setItem('myData', JSON.stringify(storedData));
    }

    loadStoredData();


    //Function to close the model
    closeBtn.addEventListener('click', () => {
        model.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === model) {
            model.style.display = 'none';
        }
    });

    function loadStoredData() {
        const tableBody = document.querySelector('#dataList');
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        tableBody.innerHTML = '';
        storedData.forEach((data, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.gender}</td>
        <td><button data-index=${index} id="editBtn">Edit</button></td>
        <td><button  data-index=${index} id="deleteBtn">Delete</button></td>
        `;
            tableBody.appendChild(tr);
        });


        const editBtns = document.querySelectorAll("#editBtn");
        editBtns.forEach(values => {
            values.addEventListener('click', (e) => {
                model.style.display = 'block';
                const storedData = JSON.parse(localStorage.getItem('myData') || [])
                const index = e.target.dataset.index
                const userData = storedData[index];

                const formElement = document.forms.editDataForm.elements;
                formElement.editIndex.value = index;
                formElement.editNameInput.value = userData.name;
                formElement.editAgeInput.value = userData.age;
                formElement.editGenderSelect.value = userData.gender;
            })
        });

        const deleteBtns = document.querySelectorAll("#deleteBtn");
        deleteBtns.forEach(values => {
            values.addEventListener('click', (e) => {
                if (confirm("Are you Sure to Delete ?")) {
                    const index = e.target.dataset.index
                    const storedData = JSON.parse(localStorage.getItem('myData') || [])
                    storedData.splice(index, 1);
                    localStorage.setItem('myData', JSON.stringify(storedData));
                    loadStoredData();
                }
            })
        });
    };

});

//Learn from the Project
//isNaN() meathod
//formEl.reset();
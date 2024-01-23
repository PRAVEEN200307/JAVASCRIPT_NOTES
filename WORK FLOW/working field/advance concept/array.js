/*
//Fetch Api in javascript

const btnText = document.getElementById('btnText');
const txtOutput = document.getElementById('txtOutput');


btnText.addEventListener("click", getTextFile);

function getTextFile() {
    fetch("fetch/data.txt")
        .then((r) => r.text())
        .then(data => {
            txtOutput.textContent = data
        });
};

//-------------------------------------------------------------------------
//get data json file
const btnJson = document.getElementById('btnJson');
const jsonOutput = document.getElementById('jsonOutput');

const handleGetJson = () => {
    fetch("fetch/user.json")
        .then(value => value.json())
        .then(txt => {
            const ul = document.createElement('ul');
            txt.forEach((value) => {
                const li = document.createElement('li');
                li.textContent = value.name
                ul.append(li);
            });
            jsonOutput.append(ul);
        });
}
btnJson.addEventListener('click', handleGetJson);
//---------------------------------------------------------------------------
const btnApi = document.getElementById('btnApi');
const apiOutput = document.getElementById('apiOutput');

async function getApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await response.json();
    jsonData.forEach((val, index) => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.innerHTML = `<span style="color:pink">${index}</span>  ${val.title}`
        p.textContent = val.body
        div.append(h1, p);
        apiOutput.append(div);
    })
}
btnApi.addEventListener('click', getApi);
----------------------------------------------------------------------
*/
//Set meathod

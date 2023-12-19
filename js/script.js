'use strict'

const URL = `https://reqres.in/api/users?page=1`;

const body = document.getElementsByTagName('body');
const div = document.createElement('div');

body[0].appendChild(div);
div.classList.add('adjust');

const createImage = (element, cont, title) => {
    let image = document.createElement(element);
    image.src = cont;
    image.title = title;
    div.appendChild(image);
}
const createContent = (element, cont) => {
    let content = document.createElement(element);
    content.innerText = cont;
    div.appendChild(content);
}

fetch(URL).then((res) => {
    return res.json();
}).then((res) => {
    for (let i in res.data) {
        console.log(res.data[i]);
        try {
            createImage('img', res.data[i].avatar, res.data[i].first_name);
            createContent('p', res.data[i].email);
        } catch (error) {
            console.log('Algo de errado aconteceu ', error);
        }
    }
});
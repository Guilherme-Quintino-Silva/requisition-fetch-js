'use strict'

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

window.addEventListener("load", () => {
    this.getReturn();
  });

async function getReturn() {
    const URL = `https://reqres.in/api/users?page=1`;
    try {

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Houve um problema.');
        }
        const resp = await response.json();

        for (let i in resp.data) {
            console.log(resp.data[i]);
            try {
                createImage('img', resp.data[i].avatar, resp.data[i].first_name);
                createContent('p', resp.data[i].email);
            } catch (error) {
                console.log('Algo de errado aconteceu ', error);
            }
        }

        console.log(resp);
    } catch (err) {
        console.error('Algo deu errado ', err);
    }
}
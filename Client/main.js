import { URL, Missing, generateList } from './module.js'
const form = document.querySelector('#form');

window.addEventListener('load', () => {
    fetch(URL, {
        method: 'GET',
    }).then(res => res.json())
    .then(completeList => generateList(completeList, document.querySelector('#listContainer')));
})

form.addEventListener('submit', () => {
    event.preventDefault();
    fetch(URL + '/addElement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(new Missing(form.message.value))
    }).then(res => res.json())
    .then(completeList => generateList(completeList, document.querySelector('#listContainer')));
})
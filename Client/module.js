const URL = 'http://localhost:8000';
class Missing{
    constructor (content) {
        this.content = content;
        this.date = new Date();
    }
}

const generateList  = (arr, htmlElement) => {
    htmlElement.innerHTML = "";
    arr.forEach(element => {
        let elementToAdd = document.createElement('div');
        elementToAdd.setAttribute('class', 'listElement');
        elementToAdd.innerText = element.content;
       
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
    
        elementToAdd.appendChild(checkBox);
        htmlElement.appendChild(elementToAdd);
    });
}

export { URL, Missing, generateList};
import pageLoad from './loadpage.js'
import contactTab from './contact.js';
import menuTab from './menu.js';


function component () {
    const element = document.getElementById('content');
    const home = document.createElement('button');
    const contact = document.createElement('button');
    const menu = document.createElement('button');

    home.textContent = 'Home';
    contact.textContent = 'Contact';
    menu.textContent = 'Menu';

    home.id = 'homeTab';
    menu.id = 'menuTab';
    contact.id = 'contactTab';

    console.log('hello');
    element.appendChild(home);
    element.appendChild(menu);
    element.appendChild(contact);
    element.appendChild(pageLoad());

    return element;
    }

document.body.appendChild(component());

const contactDisplay = document.getElementById('contactTab');
const menuDisplay = document.getElementById('menuTab');
const homeDisplay = document.getElementById('homeTab');

homeDisplay.onclick = showHome;
contactDisplay.onclick = showContact;
menuDisplay.onclick = showMenu;

function showContact() {
    const content = document.getElementById('main');
    content.innerHTML = '';
    content.appendChild(contactTab());
}

function showMenu() {
    const content = document.getElementById('main');
    content.innerHTML = '';
    content.appendChild(menuTab());
}

function showHome() {
    const content = document.getElementById('main');
    content.innerHTML = '';
    content.appendChild(pageLoad());
}
export default function contactTab() {
    const div_element = document.createElement('div');
    const contact = document.createElement('p');

    contact.textContent = "This is where the contact info goes";

    div_element.appendChild(contact);

    return div_element;
}
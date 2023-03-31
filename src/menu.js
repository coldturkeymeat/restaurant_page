export default function menuTab() {
    const div_element = document.createElement('div');
    const items = document.createElement('p');

    items.textContent = "This is where the food goes";
    div_element.appendChild(items);

    return div_element;
}
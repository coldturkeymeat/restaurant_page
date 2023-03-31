import Photo from './restaurant.png'

export default function pageLoad() {
    const div_element = document.createElement('div');
    const headline = document.createElement('h1');
    const subheading = document.createElement('p');
    const image = document.createElement('img');

    div_element.id = 'main';
    headline.textContent = 'Restaurant';
    subheading.textContent = 'This restaurant sucks';
    image.src = Photo;

    div_element.appendChild(headline);
    div_element.appendChild(subheading);
    div_element.appendChild(image);

    return div_element;
}
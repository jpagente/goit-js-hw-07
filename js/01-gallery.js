import { galleryItems } from './gallery-items.js';

// Function to create gallery items
function createGalleryItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

// Function to open modal with basicLightbox
function openModal(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
}

// Render gallery items
const galleryList = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryItem.addEventListener('click', (event) => {
    event.preventDefault();
    const source = event.currentTarget.querySelector('.gallery__image').getAttribute('data-source');
    openModal(source);
  });

  galleryList.appendChild(galleryItem);
});

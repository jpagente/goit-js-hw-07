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

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

// Render gallery items
const galleryList = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

// Initialize SimpleLightbox after adding gallery items
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery__link', { captions: true, captionDelay: 250 });
});

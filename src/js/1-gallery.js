import simpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    src: 'path/to/small-image1.jpg',
    largeSrc: 'path/to/large-image1.jpg',
    alt: 'Image description 1',
  },
  {
    src: 'path/to/small-image2.jpg',
    largeSrc: 'path/to/large-image2.jpg',
    alt: 'Image description 2',
  },
];

const createGalleryMarkup = images => {
  return images
    .map(({ src, largeSrc, alt }) => {
      return `
            <li class="gallery-item">
                <a class="gallery-link" href="${largeSrc}">
                    <img class="gallery-image" src="${src}" alt="${alt}" />
                </a>
            </li>
        `;
    })
    .join('');
};

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(images);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

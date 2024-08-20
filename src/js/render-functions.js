import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"; 
export function displayImages(images) {
    const gallery = document.querySelector(`.gallery`);
    gallery.innerHTML = ``;
    
    images.forEach(image => {
        const imgElement = `
        <a href = "${image.largeImageURL }" class = "image-card">
        <img src = "${image.webformatURL}" alt = "${image.tags}" />
        <div class = "info">
        <p> <span class = "text-span">Likes</span> ${image.likes}</p>
        <p> <span class = "text-span">Views</span> ${image.views}</p>
        <p> <span class = "text-span">Comments</span> ${image.comments}</p>
        <p> <span class = "text-span">Downloads</span> ${image.downloads}</p>
        </div>
        </a>`
        gallery.insertAdjacentHTML(`beforeend`, imgElement);
    });

    const lightbox = new simpleLightbox(`.gallery a`);
    lightbox.refresh();
}
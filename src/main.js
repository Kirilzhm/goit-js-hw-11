import { fetchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const input = document.querySelector(`.input-text`);
const button = document.querySelector(`.button-search`);
const loader = document.querySelector(`.loader`);

button.addEventListener(`click`, () => {
    const query = input.value.trim();

    if (query === ``) {
        iziToast.error({
            title: `Error`,
            message: `Please enter a search query.`,
            position: `topRight`,
        });
        return;
    }

    loader.classList.remove(`is-hidden`);

    fetchImages(query)
        .then(images => {

            loader.classList.add(`is-hidden`);

            if (images.length === 0) {
                iziToast.error({
                    title: `No results`,
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: `topRight`,
                });
            } else {
                displayImages(images);
            }
        })
        .catch(error => {

            loader.classList.add(`is-hidden`);

            iziToast.error({
                title: `Error`,
                message: `An error occurred while fetching images. Please try again later.`,
                position: `topRight`,
            });
            console.log("Error fetching img:", error);
        });
});



const apiKey = `45524929-4d44ab8f504de5084895de9cf`;
const baseUrl = `https://pixabay.com/api/`;

export function fetchImages(query) {
    const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            return data.hits;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
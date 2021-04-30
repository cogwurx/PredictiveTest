(async function () { //executes on page load
    const LOADING_CLASS_NAME = 'loading';

// get DOM elements for manipulation
    const titleContainer = document.getElementsByClassName('title-container')[0];
    const titleEl = document.getElementById('main-title');

    const imageContainer = document.getElementsByClassName('img-container')[0];
    const imageEl = document.getElementById('big-img');

    const descriptionContainer = document.getElementsByClassName('description-container')[0];
    const descriptionEl = document.getElementById('secondary-description');

// remove the 'loading' class from a DOM element
    function markElementAsLoaded(el) {
        el.classList.remove(LOADING_CLASS_NAME);
    }

// to send a get request and await response
    async function sendGetRequest(url) {
        return (await fetch(url)).json();
    }

// get random text for title
    async function loadTitle() {
        titleEl.textContent = (await sendGetRequest('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'))[0];
    }
// get random text for description
    async function loadDescription() {
        descriptionEl.textContent = (await sendGetRequest('https://baconipsum.com/api/?type=all-meat&sentences=4&start-with-lorem=1'))[0];
    }

// wait for image to finish loading (image url is set in html)
    function loadBigImage() {
        return new Promise((resolve => {
            imageEl.onload = () => resolve();
        }));
    }

// wait for all content to finish loading, them remove the 'loading' class
    Promise.all([
        loadTitle(),
        loadDescription(),
        loadBigImage()])
        .then(() => {
            markElementAsLoaded(titleContainer);
            markElementAsLoaded(descriptionContainer);
            markElementAsLoaded(imageContainer);
        });
})();

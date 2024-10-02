/* Banner Start */

const carouselSlide = document.querySelector('.carousel-slide');
const images = carouselSlide.querySelectorAll('img');

let counter = 0;
const size = images[0].clientWidth;

function startCarousel() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

setInterval(startCarousel, 1500);

/* Banner End */

/* Blog Start */

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const postContent = button.previousElementSibling;
        const dots = postContent.querySelector('.dots');
        const moreText = postContent.querySelector('.more');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            moreText.style.display = "none";
            button.textContent = "Read more";
        } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            button.textContent = "Read less";
        }
    });
});

/* Blog End */

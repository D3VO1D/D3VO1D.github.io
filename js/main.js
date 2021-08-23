const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('.section__title-link').forEach((el) => {
    const toggleHoveredState = (e) => {
        const correspondingImage = e.target.previousElementSibling;
        if (correspondingImage !== null) {
            correspondingImage.classList.toggle('person__image_hovered');
        }
    }
    ['mouseover', 'mouseout'].forEach((event) => el.addEventListener(event, toggleHoveredState));
});

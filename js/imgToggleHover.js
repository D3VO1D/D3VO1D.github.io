export const addImgToggleHover = () => {
    document.querySelectorAll('.section__title-link').forEach((el) => {
        const toggleHoveredState = (e) => {
            const correspondingImage = e.target.previousElementSibling;
            if (correspondingImage !== null) {
                correspondingImage.classList.toggle('person__image_hovered');
            }
        }
        ['mouseover', 'mouseout'].forEach((event) => el.addEventListener(event, toggleHoveredState));
    });
};

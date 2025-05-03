document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://media.giphy.com/media/JsVjdE0Z5JdewuL9M8/giphy.gif?cid=790b7611w7of3q2w32kabyuixsxy28tg6ly3z4gmntk051wp&ep=v1_gifs_search&rid=giphy.gif&ct=p",
        "https://media.giphy.com/media/kZhORBoHoCPLvoj8LR/giphy.gif?cid=ecf05e47im7vd5idyjgr7yk4yxvbwmh6bl651vraqioeb4f8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/JsVjdE0Z5JdewuL9M8/giphy.gif?cid=790b7611w7of3q2w32kabyuixsxy28tg6ly3z4gmntk051wp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/hVxmU764zPHhbg0WBg/giphy.gif?cid=ecf05e47fmbnkrai38v59vlhd57krcty2bvsesi7edzzvk5m&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    ]; // Add your image paths here

    let currentIndex = 0;
    const slider = document.querySelector(".image-slider");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    function updateSlider() {
        slider.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    // Event listeners for arrows
    rightArrow.addEventListener("click", nextSlide);
    leftArrow.addEventListener("click", prevSlide);

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);

    updateSlider(); // Set initial image
});

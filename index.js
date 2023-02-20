document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.end');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.8) / 40) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.7 * window.pageYOffset) + 'px';
})
});
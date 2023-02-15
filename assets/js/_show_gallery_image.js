window.carouselShow = function(id) {
    const active = document.getElementsByClassName('active');

    if(active[0].lastElementChild.id != id) {
        const newActive = document.getElementById(id).parentElement;
        active[0].classList.remove("active");
        newActive.classList.add("active");
    }
};
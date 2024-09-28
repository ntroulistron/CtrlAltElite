window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.pageYOffset > 0) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});
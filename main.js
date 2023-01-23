// SMOOTH SCROLLING
$('.nav-menu a, .logo a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 100
        },
        1500
        );
    }
});



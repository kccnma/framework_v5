
window.addEventListener('DOMContentLoaded', () => {


    // MENU BUTTON
    const mymenubutton = document.querySelector('.menu-button');
    const mysitenav = document.querySelector('.site-nav');
    mymenubutton.onclick = function () {
        if (mysitenav.getAttribute("data-navstate") === "open") {
            mysitenav.setAttribute('data-navstate', 'closed');
        }
        else {
            mysitenav.setAttribute('data-navstate', 'open');
        }
    };


    // SECTION AND PAGE NAV ACTIVE STATE WITH INTERSECTION OBSERVER
    const io_options = {
        // root: document.body,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const pagenav = document.querySelector('.page-nav');
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-sectionstate', 'active');
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'active');
                }
            }
            else {
                entry.target.setAttribute('data-sectionstate', 'inactive');
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'inactive');
                }
            }
        });
    }, io_options);
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });



});
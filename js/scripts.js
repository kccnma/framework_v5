
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


    // SET PAGE NAV ACTIVE STATE WITH INTERSECTION OBSERVER
    const io_options = {
        // root: document.body,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const pagenav = document.querySelector('.page-nav');
            const siteheader = document.querySelector('.site-header');
            if (entry.isIntersecting) {
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'active');
                }
            } else {
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'inactive');
                }
            }

        });
    }, io_options);
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });


    // CHANGE HEADER STATE to LIGHT OR DARK WITH INTERSECTION OBSERVER
    const io_options2 = {
        // root: document.body,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0
    };
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const siteheader = document.querySelector('.site-header');
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('darksection')) {
                    siteheader.setAttribute('data-headerstate', 'dark');
                } else {
                    siteheader.setAttribute('data-headerstate', 'light');
                }
            }
        });
    }, io_options2);
    document.querySelectorAll('section, header, footer').forEach((section) => {
        observer2.observe(section);
    });

    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
    const io_options3 = {
        // root: document.body,
        rootMargin: '0px 0px -25% 0px',
        threshold: 0
    };
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const siteheader = document.querySelector('.site-header');
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-sectionstate', 'active');
            } else {
                entry.target.setAttribute('data-sectionstate', 'inactive');
            }
        });
    }, io_options3);
    document.querySelectorAll('section, header, footer').forEach((section) => {
        observer3.observe(section);
    });



});
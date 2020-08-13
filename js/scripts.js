
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
            const siteheader = document.querySelector('.site-header');
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-sectionstate', 'active');
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'active');
                }
                // if (entry.target.classList.contains('darksection')) {
                //     siteheader.setAttribute('data-headerstate', 'dark');
                // }
            } else {
                entry.target.setAttribute('data-sectionstate', 'inactive');
                // siteheader.setAttribute('data-headerstate', 'light');
                if (pagenav) {
                    document.querySelector(`.page-nav a[href="#${id}"]`).parentElement.setAttribute('data-pagenavstate', 'inactive');
                }
            }
            // console.log(entry.intersectionRatio);
            // if (entry.intersectionRatio > 0) {
            //     if (entry.target.classList.contains('darksection')) {
            //         siteheader.setAttribute('data-headerstate', 'dark');
            //     } else {
            //         siteheader.setAttribute('data-headerstate', 'light');
            //     }
            // }


            // CHECK IF HERO IS ACTIVE

            // const myhero = document.querySelector('.hero');
            // console.log(myhero.intersectionRatio);
            // if (myhero.intersectionRatio > 0) {
            //     mysiteheader.setAttribute('data-headerstate', 'dark');
            // } else {
            //     mysiteheader.setAttribute('data-headerstate', 'light');
            // }
            // if (myhero.dataset.sectionstate === 'active') {
            //     mysiteheader.setAttribute('data-headerstate', 'dark');
            // } else {
            //     mysiteheader.setAttribute('data-headerstate', 'light');
            // }

        });
    }, io_options);
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });


    // CHECK IF HERO IS ACTIVE, IF SO... SET HEADER TO DARK
    // const mydarksections = document.querySelectorAll('.darksections');

    // const myhero = document.querySelector('.hero');
    // const mysiteheader = document.querySelector('.site-header');
    // const heroobserver = new IntersectionObserver((entries, heroobserver) => {
    //     entries.forEach(entry => {
    //         if (entry.intersectionRatio > 0) {
    //             mysiteheader.setAttribute('data-headerstate', 'dark');
    //         }
    //         else {
    //             mysiteheader.setAttribute('data-headerstate', 'light');
    //         }
    //     });
    // }, { threshold: 0 });
    // heroobserver.observe(myhero);

    // document.querySelectorAll('.darksection').forEach((section) => {
    //     heroobserver.observe(section);
    // });






});
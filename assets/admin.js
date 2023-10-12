const accordionLandingPage = document.querySelectorAll(".accordion-landing_page-header");

accordionLandingPage.forEach(accordionLandingPage => {
    accordionLandingPage.addEventListener("click", event => {
        accordionLandingPage.classList.toggle("active");
    });
});


const deactiveToActive = document.querySelectorAll(".all_projects-active-deactive");

deactiveToActive.forEach(deactiveToActive => {
    deactiveToActive.addEventListener("click", event => {
        deactiveToActive.classList.toggle("active");
    });
});
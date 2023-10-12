const accordionItemQuestion = document.querySelectorAll(".accordion-item-question");

accordionItemQuestion.forEach(accordionItemQuestion => {
    accordionItemQuestion.addEventListener("click", event => {
        const currentlyActiveAccordionItemQuestion = document.querySelector(".accordion-item-question.active");
        if (currentlyActiveAccordionItemQuestion && currentlyActiveAccordionItemQuestion !== accordionItemQuestion) {
            currentlyActiveAccordionItemQuestion.classList.toggle("active");
        }
        accordionItemQuestion.classList.toggle("active");
    });
});



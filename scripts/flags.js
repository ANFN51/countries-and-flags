console.log("JavaScript is connected.");

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('h1');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    const flagData = [
        { country: "United States", headerText: "United States" },
        { country: "China", headerText: "China" },
        { country: "India", headerText: "India" }
    ];

    function showNextSlide() {
        slides[slideIndex].classList.remove('active');

        slideIndex = (slideIndex + 1) % slides.length;

        slides[slideIndex].classList.add('active');

        header.textContent = flagData[slideIndex].headerText;
    }
    setInterval(showNextSlide, 3000);
});



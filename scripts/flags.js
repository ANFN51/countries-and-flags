console.log("JavaScript is connected.");

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('h1');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

   const flagData = [
    { id: "usa-flag", country: "United States", mapSrc: "images/map_usa.png", flagSrc: "images/flag_usa.png" },
    { id: "china-flag", country: "China", mapSrc: "images/map_china.png", flagSrc: "images/flag_china.png" },
    { id: "india-flag", country: "India", mapSrc: "images/map_india.png", flagSrc: "images/flag_india.png" }
];


    function showNextSlide() {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
        header.textContent = flagData[slideIndex].country;
    }


    flagData.forEach((flag, index) => {
        const img = document.getElementById(flag.id);

        img.addEventListener("mouseover", () => {
            img.src = flag.mapSrc;
            header.textContent = flag.country; 
        });

        img.addEventListener("mouseout", () => {
            img.src = flag.flagSrc; 
            header.textContent = "Countries and Flags";
        });
    });

    setInterval(showNextSlide, 3000);
});

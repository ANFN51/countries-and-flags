document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('h1');

    const flags = [
        { id: "usa-flag", country: "United States", mapSrc: "images/map_usa.png", flagSrc: "images/flag_usa.png" },
        { id: "china-flag", country: "China", mapSrc: "images/map_china.png", flagSrc: "images/flag_china.png" },
        { id: "india-flag", country: "India", mapSrc: "images/map_india.png", flagSrc: "images/flag_india.png" }
    ];


    flags.forEach(flag => {
        const img = document.getElementById(flag.id);
        
        img.addEventListener("mouseover", () => {
            img.style.opacity = 0; 
            setTimeout(() => {
                img.src = flag.mapSrc;  
                img.style.opacity = 1;  
            }, 300);  
            header.textContent = flag.country;  
        });
        
        img.addEventListener("mouseout", () => {
            img.style.opacity = 0;  
            setTimeout(() => {
                img.src = flag.flagSrc;  
                img.style.opacity = 1;  
            }, 300);  
            header.textContent = "Countries and Flags"; 
        });
    });
});

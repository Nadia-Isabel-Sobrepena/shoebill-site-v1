const imageElement = document.getElementById('shoebill-image');
const factElement = document.getElementById('fun-fact');
const nextButton = document.getElementById('next-button');
const counterElement = document.getElementById('counter');
const cardElement = document.getElementById('content-card');

const shoebillContent = [
    { 
        img: "https://images.birdfact.com/production/are-shoebills-dangerous.jpg?w=1792&h=1024&q=80&fm=webp&fit=clip&dm=1662584036&s=036f4d26cfba32d17f22f2f68160fac6", 
        fact: "Shoebills get their name from their massive, clog-shaped beak, which can be 9 inches long and 4 inches wide!" 
    },
    // ... keep all your other content here ...
    { 
        img: "https://i.pinimg.com/474x/13/90/f9/1390f9cd8d4f417b01a2d0dce94f4523.jpg", 
        fact: "They are classified as Vulnerable by the IUCN, with their population declining due to habitat loss." 
    }
];

let currentIndex = 0;

function updateContent() {
    // Add fade-out class
    cardElement.classList.add('fade-out');

    // Wait for animation to finish before changing text
    setTimeout(() => {
        const content = shoebillContent[currentIndex];
        imageElement.src = content.img;
        factElement.textContent = content.fact;
        counterElement.textContent = `${currentIndex + 1} / ${shoebillContent.length}`;
        
        // Remove fade-out class
        cardElement.classList.remove('fade-out');
    }, 400);
}

function showNext() {
    currentIndex = (currentIndex + 1) % shoebillContent.length;
    updateContent();
}

// Initial Load
updateContent();
nextButton.addEventListener('click', showNext);
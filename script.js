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
    { 
        img: "https://www.worldatlas.com/r/w1200-q80/upload/d0/11/05/shutterstock-1052861846.jpg", 
        fact: "They are solitary birds and prefer to hunt alone, often standing motionless for long periods to ambush prey." 
    },
    { 
        img: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/07/shoebill-beak.jpg", 
        fact: "The shoebill's scientific name is Balaeniceps rex, which literally means 'whale-head king.'" 
    },
    { 
        img: "https://preview.redd.it/shoebills-flying-v0-8dii7lk6cdkd1.jpg?width=640&crop=smart&auto=webp&s=e42571d98ed9d619be3e927b803e0fba7aafc322", 
        fact: "They have one of the slowest wing flapping rates of any bird, averaging only 150 flaps per minute." 
    },
    { 
        img: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/12/shoebill-eating-lungfish-1.jpg", 
        fact: "Their diet mainly consists of lungfish, eels, snakes, and even young crocodiles." 
    },
    { 
        img: "https://africageographic.com/wp-content/uploads/2018/03/Usha-Harish-Protect-my-habitat-AGPOY-weekly-finalist-001.jpg", 
        fact: "When flying, shoebills keep their heads tucked in and their massive bills resting on their chests." 
    },
    { 
        img: "https://i.assetzen.net/i/yuaRU0hamOxc/w:1920/h:/q:70.jpg", 
        fact: "Shoebills are native to large freshwater swamps in East Africa, mainly in Sudan, Uganda, and Zambia." 
    },
    { 
        img: "https://i.pinimg.com/564x/1a/c8/9f/1ac89f64450a3cb28d3e1a9826077de9.jpg", 
        fact: "Unlike most birds, they often use their massive beak to scoop water to cool down in the African heat." 
    },
    { 
        img: "https://www.magic-safaris.com/sites/default/files/styles/content_/public/2020-11/Shoebill1%20%283%29_0.jpg?itok=7hJQbnhi", 
        fact: "They are generally silent, but they make a loud, characteristic clattering sound with their bills, often during courtship." 
    },
    { 
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnplimages.infradoxxs.com%2Fcache%2Fpcache2%2F01426240.jpg&f=1&nofb=1&ipt=31ed3457511ea523c06a6666fffd0730333cd92cbe509d9013ea7e11c290ba25", 
        fact: "Shoebill chicks are usually hatched in pairs, but the stronger chick often outcompetes its sibling for food." 
    },
    { 
        img: "https://www.telegraph.co.uk/content/dam/news/2022/05/02/TELEMMGLPICT000294624521_trans_NvBQzQNjv4BqMVRqOokJmlxoYDkkW7u6fh3EUv-dp1QDaQfMzS5p5iE.jpeg?imwidth=640", 
        fact: "Their eyes are large and placed toward the front of their head, giving them excellent binocular vision, which is great for hunting." 
    },
    { 
        img: "https://i.pinimg.com/474x/13/90/f9/1390f9cd8d4f417b01a2d0dce94f4523.jpg", 
        fact: "They are classified as Vulnerable by the IUCN, with their population declining due to habitat loss." 
    }
];

let currentIndex = 0;

function updateContent() {
    // Start the fade-out animation
    cardElement.classList.add('fade-out');

    // Wait 400ms (matching the CSS transition) before swapping data
    setTimeout(() => {
        const content = shoebillContent[currentIndex];
        imageElement.src = content.img;
        factElement.textContent = content.fact;
        
        // Update the visual counter (e.g., "3 / 12")
        if (counterElement) {
            counterElement.textContent = `${currentIndex + 1} / ${shoebillContent.length}`;
        }
        
        // Fade the card back in
        cardElement.classList.remove('fade-out');
    }, 400);
}

function showNext() {
    currentIndex = (currentIndex + 1) % shoebillContent.length;
    updateContent();
}

// Set initial content on page load
// Using a slightly different approach for the first load so it doesn't "flash"
const initialLoad = () => {
    const content = shoebillContent[currentIndex];
    imageElement.src = content.img;
    factElement.textContent = content.fact;
    counterElement.textContent = `1 / ${shoebillContent.length}`;
};

initialLoad();

// Attach the event listener
nextButton.addEventListener('click', showNext);
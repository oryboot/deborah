// French love quotes array
const loveQuotes = ["Envois tes pieds stp"];

// Function to change quotes
function changeQuote() {
    const quoteElement = document.getElementById('love-quote');
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
}




document.querySelector('.quote-box').addEventListener('click', changeQuote);


// Function to generate a random size
function getRandomSize() {
    return Math.random() * (60 - 15) + 15 + 'px'; // Random size between 15px and 30px
}

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.opacity = 0.7; // Set opacity for hearts
    heart.style.fontSize = getRandomSize(); // Set random size for hearts
    document.querySelector('.floating-hearts').appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create floating roses
function createFloatingRoses() {
    const roses = document.createElement('div'); // Corrected from 'div1' to 'div'
    roses.className = 'floating-roses';
    roses.innerHTML = '🌹';
    roses.style.left = Math.random() * 100 + 'vw';
    roses.style.opacity = 0.7; // Set opacity for roses
    roses.style.fontSize = getRandomSize(); // Set random size for roses
    document.querySelector('.floating-hearts').appendChild(roses); // Append to the same container

    // Remove rose after animation
    roses.addEventListener('animationend', () => {
        roses.remove();
    });
}

// Create new floating rose every 2 seconds
setInterval(createFloatingRoses, 3000); // Add interval for roses

// Create new floating rose every 2 seconds
setInterval(createFloatingHeart, 5000); // Add interval for roses

// Add click event to gallery
document.querySelector('.gallery').addEventListener('click', () => {
    alert('This is where you can add your favorite photos together! 📸');
});

// Add hover effects
document.querySelectorAll('.message-box, .gallery, .quote-box').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// Start animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    changeQuote(); // Initial quote change
    createFloatingHeart(); // Initial heart creation
});

// Add sparkle effect on click
document.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

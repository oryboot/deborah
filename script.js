const loveQuotes = ["Envois tes pieds stp"];

function changeQuote() {
    const quoteElement = document.getElementById('love-quote');
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
}




document.querySelector('.quote-box').addEventListener('click', changeQuote);


function getRandomSize() {
    return Math.random() * (60 - 15) + 15 + 'px'; 
}


function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.opacity = 0.7; 
    heart.style.fontSize = getRandomSize(); 
    document.querySelector('.floating-hearts').appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}


function createFloatingRoses() {
    const roses = document.createElement('div'); 
    roses.className = 'floating-roses';
    roses.innerHTML = '🌹';
    roses.style.left = Math.random() * 100 + 'vw';
    roses.style.opacity = 0.7;
    roses.style.fontSize = getRandomSize();
    document.querySelector('.floating-hearts').appendChild(roses);


    roses.addEventListener('animationend', () => {
        roses.remove();
    });
}


setInterval(createFloatingRoses, 10000); 


setInterval(createFloatingHeart, 11000); 


document.querySelector('.gallery').addEventListener('click', () => {
    alert('This is where you can add your favorite photos together! 📸');
});


document.querySelectorAll('.message-box, .gallery, .quote-box').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    changeQuote();
    createFloatingHeart(); 
});


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

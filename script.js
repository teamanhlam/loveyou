document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.effect-container');
    const texts = ["Yêu vợ yêu nhiều nhiều nhiều", "My love", "Forever", "Trên trời có đám mây xanh", "Dưới đất có anh yêu em rất nhiều 🤍"];
    const characters = ["❤️", "💖", "💘", "✨"];

    function createEffectElement() {
        const isHeart = Math.random() > 0.5; // Randomly decide if it's a heart or text
        const element = document.createElement('div');

        if (isHeart) {
            element.classList.add('floating-heart');
            element.textContent = characters[Math.floor(Math.random() * characters.length)];
        } else {
            element.classList.add('floating-text');
            element.textContent = texts[Math.floor(Math.random() * texts.length)];
        }

        const size = Math.random() * 20 + 10; // Random size
        const left = Math.random() * 100; // Random horizontal position
        const duration = Math.random() * 5 + 7; // Random animation duration

        element.style.left = `${left}vw`;
        element.style.fontSize = `${size}px`;
        element.style.animationDuration = `${duration}s`;

        container.appendChild(element);

        // Remove the element after the animation is finished to save memory
        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }

    // Create a new element every 300 milliseconds
    setInterval(createEffectElement, 300);
});
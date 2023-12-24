let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slider-image');
    
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('form-message');

    if (name && email) {
        messageElement.textContent = `Thank you, ${name}! We will contact you at ${email}.`;
    } else {
        messageElement.textContent = 'Please fill out all fields.';
    }
}

// Display the first slide when the page loads
window.onload = function () {
    showSlide(slideIndex);
};

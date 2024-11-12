window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#f08080';
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = '#ffdab9';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});

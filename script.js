// JavaScript for dynamic year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// JavaScript for form submission behavior
function submitForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        document.getElementById('formStatus').textContent = `Thank you, ${name}. Your message has been sent!`;
        document.getElementById('formStatus').style.color = 'green';
        document.getElementById('contactForm').reset(); // Reset form fields
    } else {
        document.getElementById('formStatus').textContent = 'Please fill out all fields.';
        document.getElementById('formStatus').style.color = 'red';
    }
}

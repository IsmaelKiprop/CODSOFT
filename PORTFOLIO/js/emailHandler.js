// emailHandler.js

// Replace these values with your actual Email.js service credentials
const EMAILJS_USER_ID = '6t-5DP6T-N-19QXNW';
const EMAILJS_SERVICE_ID = 'service_huf6wru';
const EMAILJS_TEMPLATE_ID = 'template_0utn5z9';

function sendEmail(event) {
  event.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Initialize Email.js with your user ID
  emailjs.init(EMAILJS_USER_ID);

  // Send the email using Email.js
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    reply_to: email,
    to_name: 'Ismael', // Replace with your name or email recipient's name
    subject: subject,
    message_html: message
  }).then(
    function (response) {
      console.log('Email sent successfully!', response);
      // Optionally, you can display a success message to the user here.
      // For example, you can show an alert or update the form with a success message.
      displaySuccessMessage();
    },
    function (error) {
      console.log('Failed to send email:', error);
      // Optionally, you can display an error message to the user here.
      // For example, you can show an alert or update the form with an error message.
    }
  );
}

function displaySuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Email sent successfully!';
    successMessage.style.color = 'green';
  
    // Add the success message after the form
    form.insertAdjacentElement('afterend', successMessage);
  
    // Optional: Clear form fields after successful submission
    form.reset();
  }

// Attach the sendEmail function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', sendEmail);

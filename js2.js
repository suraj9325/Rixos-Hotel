<script>
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Check if the name field is empty
      if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
      }

      // Check if the email field is empty and contains a valid email address
      if (email.trim() === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }

      // Check if the message field is empty
      if (message.trim() === '') {
        alert('Please enter your message.');
        return false;
      }

      // If all validations pass, the form can be submitted
      alert('Form submitted successfully!');
      return true;
    }

    function validateEmail(email) {
      // Simple email validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  </script>
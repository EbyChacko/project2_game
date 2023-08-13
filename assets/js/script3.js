let submitBtn = document.getElementById('submit');
let feedbackForm = document.getElementById('field-set');

submitBtn.addEventListener('click', function() {
  let nameField = document.getElementById('name-field');
  let name = nameField.value;
  let emailField = document.getElementById('email-field');
  let email = emailField.value;
  let mobileField = document.getElementById('phone-field');
  let mobile = mobileField.value;
  let messageField = document.getElementById('feedback');
  let message = messageField.value;

  feedbackForm.innerHTML = `<h2>Thanks For Your Valuable Feedback</h2>
    <h3>You Sent the below details....</h3>
    <p> Name : ${name} </p>
    <p> Email : ${email}</p>
    <p> Mobile Number : ${mobile}</p>
    <p> Message : ${message}</p>`;
});
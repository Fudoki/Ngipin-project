// User account Interface
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
}

function logOut() {
  window.location.assign("index.html");
  alert('You logged out successfully..');
}

// Register an account
var registrationForm = document.getElementById('form-box');
if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create user object
    var user = {
      username: username,
      password: password
    };

    // Check if local storage already has registered users
    var registeredUsers = localStorage.getItem('registeredUsers');
    if (registeredUsers) {
      registeredUsers = JSON.parse(registeredUsers); // Parse existing data
      registeredUsers.push(user); // Add new user to array
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers)); // Update local storage
    } else {
      localStorage.setItem('registeredUsers', JSON.stringify([user])); // Create new array with user
    }

    // Save the currently registered user for logging in
    localStorage.setItem('currentUser', JSON.stringify(user));

    alert('Registration successful!');
    document.getElementById('form-box').reset(); // Reset the form
  });
}

// Appointment booking
document.addEventListener('DOMContentLoaded', function() {
  var appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      var fullName = document.getElementById('fullName').value;
      var age = document.getElementById('age').value;
      var contact = document.getElementById('con').value;
      var email = document.getElementById('email').value;
      var appointmentDate = document.getElementById('appointmentDate').value;
      var appointmentTime = document.getElementById('appointmentTime').value;
      var doctor = document.getElementById('doctor').value;

      // Perform validation
      if (fullName && age && contact && email && appointmentDate && appointmentTime && doctor) {
        var appointmentDateTime = new Date(appointmentDate + 'T' + appointmentTime);
        var currentDateTime = new Date();

        // Compare appointment date with the current date and time
        if (appointmentDateTime > currentDateTime) {
          // Perform further actions, such as saving the appointment to a database

          // Create appointment object
          var appointment = {
            fullName: fullName,
            age: age,
            contact: contact,
            email: email,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            doctor: doctor
          };

          // Check if local storage already has booked appointments
          var bookedAppointments = localStorage.getItem('bookedAppointments');
          if (bookedAppointments) {
            bookedAppointments = JSON.parse(bookedAppointments); // Parse existing data
            bookedAppointments.push(appointment); // Add new appointment to array
            localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments)); // Update local storage
          } else {
            localStorage.setItem('bookedAppointments', JSON.stringify([appointment])); // Create new array with appointment
          }

          alert('Appointment booked successfully!');
          // Reset the form
          appointmentForm.reset();
        } else {
          alert('Please select a future date and time for the appointment.');
        }
      } else {
        alert('Please fill in all the required fields.');
      }
    });
  }
});

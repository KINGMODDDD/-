$(document).ready(function() {
// Predefined user credentials
const predefinedUser = {
username: 'Teke_Love',
password: '12345678'
};

$('#loginForm').on('submit', function(event) {
event.preventDefault();

const username = $('#username').val();
const password = $('#password').val();

if (username === predefinedUser.username && password === predefinedUser.password) {
window.location.href = 'dashboard.html';
} else {
alert('Invalid username or password');
}
});

// Toggle password visibility
$(document).on('click', '.toggle-password', function() {
$(this).toggleClass("fa-eye fa-eye-slash");
var input = $("#password");
input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password');
});

// Snow effect
new Snow();
});

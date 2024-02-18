import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


}
// // Get references to the form and login status div
// const loginForm = document.getElementById('loginForm') as HTMLFormElement;
// const loginStatus = document.getElementById('loginStatus') as HTMLDivElement;

// // Define a function to handle form submission
// function handleLogin(event: Event) {
//     event.preventDefault();

//     const username = (document.getElementById('username') as HTMLInputElement).value;
//     const password = (document.getElementById('password') as HTMLInputElement).value;

//     // You can add your login logic here, for example:
//     if (username === 'yourUsername' && password === 'yourPassword') {
//         loginStatus.innerText = 'Login successful!';
//     } else {
//         loginStatus.innerText = 'Login failed. Please check your credentials.';
//     }
// }

// // Add a submit event listener to the form
// loginForm.addEventListener('submit', handleLogin);/

// function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   const errorMessage = document.getElementById('error-message');


//   if (username === 'user123' && password === 'password123') {

//       alert('Login successful! Redirecting...');

//   } else {

//       errorMessage.textContent = 'Invalid username or password.';
//   }
// }
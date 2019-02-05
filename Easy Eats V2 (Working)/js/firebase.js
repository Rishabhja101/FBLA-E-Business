function login() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDyROajn9x44lXUYqkfTPaeYfMjtkxuxE",
    authDomain: "fbla-e-business-2018-19.firebaseapp.com",
    databaseURL: "https://fbla-e-business-2018-19.firebaseio.com",
    projectId: "fbla-e-business-2018-19",
    storageBucket: "fbla-e-business-2018-19.appspot.com",
    messagingSenderId: "607834993150"
  };
  firebase.initializeApp(config);

  // Get elements
  const newFirstName = document.getElementById('firstname').value;
  const newLastName = document.getElementById('lastname').value;
  const newEmail = document.getElementById('email').value;
  const newAddress = document.getElementById('address').value;
  const newPassword = document.getElementById('password').value;

  const oldEmail = document.getElementById('emailO').value;
  const oldPassword = document.getElementById('passwordO').value;

  const promise = auth.signInWithEmailAndPassword(newEmail, newPassword);
  promise.catch(e => console.log(e.message));
}

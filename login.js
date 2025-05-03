// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBpkGRPcVGoX3PCWeIQJ3_1XpqvnbG6orI",
  authDomain: "fitlife-pro-9009.firebaseapp.com",
  projectId: "fitlife-pro-9009",
  storageBucket: "fitlife-pro-9009.appspot.com",
  messagingSenderId: "635036402777",
  appId: "1:635036402777:web:42c7561a16bcb8212d5d48",
  measurementId: "G-5W6FVBTXDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between Sign In and Sign Up panels
const container = document.getElementById('container');
document.getElementById('signUp').addEventListener('click', () => {
  container.classList.add("right-panel-active");
});
document.getElementById('signIn').addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Signup logic
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(userCredential.user)
        .then(() => {
          // Redirect to login page after signup
          window.location.href = "index.html";
        });
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login logic
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        window.location.href = "fitlife.html";
      } else {
        alert("Please verify your email before logging in.");
        signOut(auth);
      }
    })
    .catch((error) => {
      const code = error.code;
      if (code === 'auth/wrong-password') {
        alert("Incorrect password. Try again.");
      } else if (code === 'auth/user-not-found') {
        alert("No user found with that email.");
      } else if (code === 'auth/too-many-requests') {
        alert("Too many attempts. Please try again later.");
      } else {
        alert("Login failed: " + error.message);
      }
    });
});

// Forgot password logic
document.getElementById('forgotPassword').addEventListener('click', () => {
  const email = prompt("Enter your email to reset your password:");
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert("Error sending reset email: " + error.message);
      });
  }
});

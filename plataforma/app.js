let selectedRole = null;

/* Splash */
setTimeout(() => {
  document.getElementById("authContainer").classList.remove("hidden");
}, 2800);

/* Recordar sesión */
auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});

function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("roleSelect").classList.remove("hidden");
}

function selectRole(role) {
  selectedRole = role;
  document.getElementById("roleSelect").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pin = document.getElementById("pin").value;

  auth.createUserWithEmailAndPassword(email, pin)
    .then(userCredential => {
      const user = userCredential.user;

      db.collection("users").doc(user.uid).set({
        name: name,
        email: email,
        role: selectedRole
      });

      alert("Cuenta creada correctamente");
    })
    .catch(error => alert(error.message));
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const pin = document.getElementById("loginPin").value;

  auth.signInWithEmailAndPassword(email, pin)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}
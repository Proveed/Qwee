auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    db.collection("users").doc(user.uid).get().then(doc => {
      const data = doc.data();

      document.getElementById("welcome").innerText =
        "Bienvenido " + data.name;

      if (data.role === "emprendedor") {
        document.body.classList.add("theme-entrepreneur");
      } else {
        document.body.classList.add("theme-provider");
      }
    });
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}
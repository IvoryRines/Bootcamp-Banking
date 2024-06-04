const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      // Toastify({
      //   text: "Logged in!",
      //   duration: 3000,
      //   close: true,
      //   gravity: "top",
      //   position: "right",
      //   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      //   stopOnFocus: true,
      // }).showToast();
    } else {
      Toastify({
        text: "Failed to log in",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true,
        offset: {
          y: 50,
        },
      }).showToast();
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

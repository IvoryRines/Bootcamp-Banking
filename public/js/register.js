const registerFormHandler = async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email-signup").value.trim();
  const passwordInput = document.querySelector("#password-signup").value.trim();
  const usernameInput = document.querySelector("#username-signup").value.trim();

  if (emailInput && passwordInput && usernameInput) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        username: usernameInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      Toastify({
        text: "Account Created, Please Log In!",
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

      setTimeout(() => {
        document.location.replace("/login");
      }, 2000);
    } else {
      Toastify({
        text: "Failed to Create Account!",
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
  .querySelector(".signup-form")
  .addEventListener("submit", registerFormHandler);

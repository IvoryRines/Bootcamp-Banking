const registerFormHandler = async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email-signup").value.trim();
  const passwordInput = document.querySelector("#password-signup").value.trim();
  const usernameInput = document.querySelector("#username-signup").value.trim();

  if (emailInput && passwordInput && usernameInput) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ emailInput, passwordInput, usernameInput }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to register");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", registerFormHandler);

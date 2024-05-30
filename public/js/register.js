const registerFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();

  if (email && password && username) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
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

const openCheckingHandler = async (event) => {
  event.preventDefault();

  // TODO: make accountNumber a random 9 digit number generator
  const accountNumber = 1111112;
  const accountBalance = 0;

  const response = await fetch("/api/accounts/checking", {
    method: "POST",
    body: JSON.stringify({ accountNumber, accountBalance }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/checking");
    alert("Checking account opened!");
  } else {
    alert("Failed to open account. You may have already created one.");
    document.location.replace("/checking");
  }
};

document
  .querySelector("#checking")
  .addEventListener("click", openCheckingHandler);

const openChecking = async (event) => {
  event.preventDefault();

  var minm = 100000000;
  var maxm = 999999999;
  const accountNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

  const accountBalance = 0;

  const response = await fetch("/api/accounts/checking", {
    method: "POST",
    body: JSON.stringify({ accountNumber, accountBalance }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace("/checking");
    Toastify({
      text: "Checking account opened!",
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
      document.location.replace("/checking");
    }, 2000);
  } else {
    Toastify({
      text: "Failed to open account. You may have already created one.",
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
      document.location.replace("/checking");
    }, 2000);
  }
};

document
  .querySelector("#open-checking")
  .addEventListener("click", openChecking);

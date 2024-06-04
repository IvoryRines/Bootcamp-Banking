const transferInputHandler = async (event) => {
  event.preventDefault();

  const transfer = document.querySelector(".transfer-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
  }

  var number = extractNumber(balance);

  let newBalance = number - Number(transfer);

  if (transfer) {
    const response = await fetch("/api/accounts/savings/transfer", {
      method: "PUT",
      body: JSON.stringify({ newBalance, transfer: Number(transfer) }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/savings");
      // I believe this is redundant, since we have the page reload.

      transferCurrency = Number(transfer).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });

      Toastify({
        text: `$${transferCurrency} transfer to checking successful!`,
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

      // Delay the page reload to see the toast message
      setTimeout(() => {
        location.reload();
      }, 2000);

      localStorage.setItem("lastTransactionStatus", "success");
    } else {
      document.querySelector(".transaction").innerHTML = `Last transfer failed`;
      newBalance = newBalance + Number(transfer);

      const revertResponse = await fetch("/api/accounts/savings", {
        method: "PUT",
        body: JSON.stringify({ newBalance }),
        headers: { "Content-Type": "application/json" },
      });

      if (revertResponse.ok) {
        Toastify({
          text: "Failed to transfer money",
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

        // Delay the page reload to see the toast message
        setTimeout(() => {
          location.reload();
        }, 2000);

        localStorage.setItem("lastTransactionStatus", "transfer-failed");
      } else {
        Toastify({
          text: "Failed to transfer money",
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
  }
};

const depositInputHandler = async (event) => {
  event.preventDefault();

  const deposit = document.querySelector(".deposit-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
  }

  var number = extractNumber(balance);

  const newBalance = number + Number(deposit);

  if (deposit) {
    const response = await fetch("/api/accounts/savings", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/savings");

      depositCurrency = Number(deposit).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });

      Toastify({
        text: `$${depositCurrency} Deposit succesful!`,
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

      // Delay the page reload to see the toast message
      setTimeout(() => {
        location.reload();
      }, 2000);

      localStorage.setItem("lastTransactionStatus", "success");
    } else {
      document.querySelector(".transaction").innerHTML = `Last deposit failed`;
      localStorage.setItem("lastTransactionStatus", "deposit-failed");
      Toastify({
        text: "Failed to deposit money",
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

      // Delay the page reload to see the toast message
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }
};

const withdrawInputHandler = async (event) => {
  event.preventDefault();

  const withdraw = document.querySelector(".withdrawal-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
  }

  var number = extractNumber(balance);

  const newBalance = number - Number(withdraw);

  if (withdraw) {
    const response = await fetch("/api/accounts/savings", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/savings");

      withdrawCurrency = Number(withdraw).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });

      Toastify({
        text: `$${withdrawCurrency} Withdrawal succesful!`,
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

      // Delay the page reload to see the toast message
      setTimeout(() => {
        location.reload();
      }, 2000);

      localStorage.setItem("lastTransactionStatus", "success");
    } else {
      document.querySelector(".transaction").innerHTML =
        `Last withdrawal failed`;
      localStorage.setItem("lastTransactionStatus", "withdrawal-failed");
      Toastify({
        text: "Failed to withdraw money",
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

      // Delay the page reload to see the toast message
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }
};

window.addEventListener("load", () => {
  // Check last transaction status from local storage
  const lastTransactionStatus = localStorage.getItem("lastTransactionStatus");

  // If the last transaction was successful, update the UI accordingly
  if (lastTransactionStatus === "success") {
    transactionDateHandler();
  } else if (lastTransactionStatus === "transfer-failed") {
    document.querySelector(".transaction").innerHTML = "Last transfer failed";
  } else if (lastTransactionStatus === "deposit-failed") {
    document.querySelector(".transaction").innerHTML = "Last deposit failed";
  } else if (lastTransactionStatus === "withdrawal-failed") {
    document.querySelector(".transaction").innerHTML = "Last withdrawal failed";
  }
});

const transactionDateHandler = () => {
  let updatedAt = document.querySelector(".update").textContent.trim() ?? null;
  let updateTime = dayjs(updatedAt).format("h:mm A");
  let updateDate = dayjs(updatedAt).format("MMMM D, YYYY");
  let today = dayjs().format("MMMM D, YYYY");
  let todayDate = dayjs();
  let difference = todayDate.diff(updateDate, "days");

  if (updateDate == today) {
    document.querySelector(".update").innerHTML = `${updateTime} today`;
  } else if (difference == 1) {
    document.querySelector(".update").innerHTML = `${updateTime} yesterday`;
  } else {
    document.querySelector(".update").innerHTML =
      `${updateTime} on ${updateDate}`;
  }
};

const openedDateHandler = () => {
  let updatedAt = document.querySelector(".update").textContent.trim() ?? null;
  let createdAt = document.querySelector(".create").textContent.trim();
  let createTime = dayjs(createdAt);

  document.querySelector(".create").innerHTML =
    createTime.format("MMMM D, YYYY");

  if (updatedAt == createdAt) {
    document.querySelector(".transaction").innerHTML = ``;
  }
};

const currencyHandler = () => {
  const balance = document.querySelector(".span").textContent.trim();

  const balanceNumber = Number(balance);

  const formattedBalance = balanceNumber.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  document.querySelector(".span").innerHTML = formattedBalance;
};

openedDateHandler();
currencyHandler();

document
  .querySelector(".transfer-btn")
  .addEventListener("click", transferInputHandler);
document
  .querySelector(".deposit-btn")
  .addEventListener("click", depositInputHandler);
document
  .querySelector(".withdrawal-btn")
  .addEventListener("click", withdrawInputHandler);

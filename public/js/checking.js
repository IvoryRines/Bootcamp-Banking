const transferInputHandler = async (event) => {
  event.preventDefault();

  const transfer = document.querySelector(".transfer-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  console.log(balance);
  
  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g,""));
  }

  var number = extractNumber(balance);
  console.log(number);

  let newBalance = number - Number(transfer);

  if (transfer) {
    const response = await fetch("/api/accounts/checking/transfer", {
      method: "PUT",
      body: JSON.stringify({ newBalance, transfer: Number(transfer) }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/checking");

      transferCurrency = Number(transfer).toLocaleString('en-US', {minimumFractionDigits: 2})

      alert(`$${transferCurrency} transfer to savings successful!`);
    } else {
      newBalance = newBalance + Number(transfer);

      const revertResponse = await fetch("/api/accounts/checking", {
        method: "PUT",
        body: JSON.stringify({ newBalance }),
        headers: { "Content-Type": "application/json" },
      });

      if (revertResponse.ok) {
        alert("Failed to transfer money");
      } else {
        alert("Failed to revert transfer");
      }
    }
  }

  location.reload();
};

const depositInputHandler = async (event) => {
  event.preventDefault();

  const deposit = document.querySelector(".deposit-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  console.log(balance);
  
  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g,""));
  }

  var number = extractNumber(balance);
  console.log(number);

  const newBalance = Number(number) + Number(deposit);


  if (deposit) {
    const response = await fetch("/api/accounts/checking", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/checking");

      depositCurrency = Number(deposit).toLocaleString('en-US', {minimumFractionDigits: 2})

      alert(`$${depositCurrency} deposit succesful!`);
    } else {
      alert("Failed to deposit money");
    }
  }
};

const withdrawInputHandler = async (event) => {
  event.preventDefault();

  const withdraw = document.querySelector(".withdraw-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  console.log(balance);
  
  function extractNumber(currencyString) {
    // Remove any non-numeric characters
    return parseFloat(currencyString.replace(/[^0-9.-]+/g,""));
  }

  var number = extractNumber(balance);
  console.log(number);

  const newBalance = Number(number) - Number(withdraw);

  if (withdraw) {
    const response = await fetch("/api/accounts/checking", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/checking");

      withdrawCurrency = Number(withdraw).toLocaleString('en-US', {minimumFractionDigits: 2})

      alert(`$${withdrawCurrency} withdrawal succesful!`);
    } else {
      alert("Failed to withdraw money");
    }
  }
};

const dateHandler = () => {
  let updatedAt = document.querySelector('.update').textContent.trim();
    let updateTime = dayjs(updatedAt).format('h:mm A');
    let updateDate = dayjs(updatedAt).format('MMMM D, YYYY');
    let today = dayjs().format('MMMM D, YYYY');
    let todayDate = dayjs();
    let difference = todayDate.diff(updateDate, 'days');
    
    if (updateDate == today) {
      document.querySelector('.update').innerHTML = `${updateTime} today`
    } else if (difference == 1) {
      document.querySelector('.update').innerHTML = `${updateTime} yesterday`
    } else {
      document.querySelector('.update').innerHTML = `${updateTime} on ${updateDate}`
    }

    let createdAt = document.querySelector('.create').textContent.trim();
    let createTime = dayjs(createdAt);
    console.log(createTime);
    document.querySelector('.create').innerHTML = createTime.format('MMMM D, YYYY');
};

const currencyHandler = () => {
  const balance = document.querySelector(".span").textContent.trim();

  const balanceNumber = Number(balance);

  const formattedBalance = balanceNumber.toLocaleString('en-US', {minimumFractionDigits: 2});

  document.querySelector('.span').innerHTML = formattedBalance;
};

dateHandler();
currencyHandler();

document
  .querySelector(".transfer-btn")
  .addEventListener("click", transferInputHandler);
document
  .querySelector(".deposit-btn")
  .addEventListener("click", depositInputHandler);
document
  .querySelector(".withdraw-btn")
  .addEventListener("click", withdrawInputHandler);

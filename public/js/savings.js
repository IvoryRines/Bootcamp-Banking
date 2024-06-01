const transferInputHandler = async (event) => {
  event.preventDefault();

  const transfer = document.querySelector(".transfer-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  const newBalance = Number(balance) - Number(transfer);

  if (transfer) {
    const response = await fetch("/api/accounts/savings/transfer", {
      method: "PUT",
      body: JSON.stringify({ newBalance, transfer: Number(transfer) }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/savings");
      alert("Transfer successful!");
    } else {
      alert("Failed to transfer money");
    }
  }

  location.reload();
};

const depositInputHandler = async (event) => {
  event.preventDefault();

  const deposit = document.querySelector(".deposit-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  const newBalance = Number(balance) + Number(deposit);

  if (deposit) {
    const response = await fetch("/api/accounts/savings", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/savings");
      alert("Deposit successful!");
    } else {
      alert("Failed to deposit money");
    }
  }
};

const withdrawInputHandler = async (event) => {
  event.preventDefault();

  const withdraw = document.querySelector(".withdraw-input").value.trim();
  const balance = document.querySelector(".span").textContent.trim();

  const newBalance = Number(balance) - Number(withdraw);

  if (withdraw) {
    const response = await fetch("/api/accounts/savings", {
      method: "PUT",
      body: JSON.stringify({ newBalance }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/savings");
      alert("Withdrawal successful!");
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

dateHandler();

document
  .querySelector(".transfer-btn")
  .addEventListener("click", transferInputHandler);
document
  .querySelector(".deposit-btn")
  .addEventListener("click", depositInputHandler);
document
  .querySelector(".withdraw-btn")
  .addEventListener("click", withdrawInputHandler);

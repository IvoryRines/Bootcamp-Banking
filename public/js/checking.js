const transferInputHandler = async (event) => {
    event.preventDefault();
  
    const transfer = document.querySelector('.transfer-input').value.trim();
    const balance = document.querySelector('.span').textContent.trim();

    const newBalance = Number(balance) - Number(transfer);
  
    if (transfer) {
      const response = await fetch('/api/accounts/checking/transfer', {
        method: 'PUT',
        body: JSON.stringify({ newBalance, transfer: Number(transfer) }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/checking');
        alert('Transfer successful!');
      } else {
        alert('Failed to transfer money');
      }
    }
  };

  const depositInputHandler = async (event) => {
    event.preventDefault();
  
    const deposit = document.querySelector('.deposit-input').value.trim();
    const balance = document.querySelector('.span').textContent.trim();

    const newBalance = Number(balance) + Number(deposit);
  
    if (deposit) {
      const response = await fetch('/api/accounts/checking', {
        method: 'PUT',
        body: JSON.stringify({ newBalance }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/checking');
        alert('Deposit successful!');
      } else {
        alert('Failed to deposit money');
      }
    }
  };

const withdrawInputHandler = async (event) => {
    event.preventDefault();
  
    const withdraw = document.querySelector('.withdraw-input').value.trim();
    const balance = document.querySelector('.span').textContent.trim();

    const newBalance = Number(balance) - Number(withdraw);
  
    if (withdraw) {
      const response = await fetch('/api/accounts/checking', {
        method: 'PUT',
        body: JSON.stringify({ newBalance }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/checking');
        alert('Withdraw successful!');
      } else {
        alert('Failed to withdraw money');
      }
    }
  };

document
  .querySelector('.transfer-btn')
  .addEventListener('click', transferInputHandler);
document
    .querySelector('.deposit-btn')
    .addEventListener('click', depositInputHandler);
document
    .querySelector('.withdraw-btn')
    .addEventListener('click', withdrawInputHandler);

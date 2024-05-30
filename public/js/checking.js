const depositInputHandler = async (event) => {
    event.preventDefault();
  
    const deposit = document.querySelector('#deposit-input').value.trim();
  
    if (deposit) {
      const response = await fetch('/api/users/checking', {
        method: 'PUT',
        body: JSON.stringify({ account_balance }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/checking');
      } else {
        alert('Failed to deposit money');
      }
    }
  };

const withdrawInputHandler = async (event) => {
    event.preventDefault();
  
    const withdraw = document.querySelector('#withdraw-input').value.trim();
  
    if (withdraw) {
      const response = await fetch('/api/users/checking', {
        method: 'PUT',
        body: JSON.stringify({ account_balance }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/checking');
      } else {
        alert('Failed to withdraw money');
      }
    }
  };
  
  document
    .querySelector('.deposit')
    .addEventListener('submit', depositInputHandler);
  document
    .querySelector('.withdraw')
    .addEventListener('submit', withdrawInputHandler);
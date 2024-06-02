const openSavingsHandler = async (event) => {
    event.preventDefault();

    const accountNumber = 2;
    const accountBalance = 0;

    const response = await fetch('/api/accounts/savings', {
        method: 'POST',
        body: JSON.stringify({ accountNumber, accountBalance }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/savings');
        alert('Savings account opened!');
      } else {
        alert('Failed to open account. You may have already created one');
        document.location.replace('/savings');
      }
};

document
  .querySelector('#savings')
  .addEventListener('click', openSavingsHandler);

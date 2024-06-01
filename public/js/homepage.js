const openCheckingHandler = async (event) => {
    event.preventDefault();

    // TODO: make accountNumber a random 9 digit number generator
    const accountNumber = 1;
    const accountBalance = 0;

    const response = await fetch('/api/accounts/checking', {
        method: 'POST',
        body: JSON.stringify({ accountNumber, accountBalance }),
        headers: { 'Content-Type': 'application/json' },
    });
        
    if (response.ok) {
        document.location.replace('/checking');
        alert('Checking account opened!');
    } else {
        alert('Failed to open account. You may have already created one.');
        document.location.replace('/checking');
    }

};

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
  .querySelector('#checking')
  .addEventListener('click', openCheckingHandler);
document
  .querySelector('#savings')
  .addEventListener('click', openSavingsHandler);

const openCheckingHandler = async (event) => {
    event.preventDefault();
  
      var minm = 100000000;
      var maxm = 999999999;
      const accountNumber = Math.floor(Math .random() * (maxm - minm + 1)) + minm; 
  
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
  
  
  document
    .querySelector("#open-checking")
    .addEventListener("click", openCheckingHandler);
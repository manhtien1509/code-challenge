const exchangeRate = 1.2;

document.getElementById("input-amount").addEventListener("input", function () {
  const inputAmount = parseFloat(this.value) || 0;
  document.getElementById("output-amount").value = (inputAmount * exchangeRate).toFixed(2);
});

document.getElementById("confirm-button").addEventListener("click", function () {
  const inputAmount = document.getElementById("input-amount").value;
  const outputAmount = document.getElementById("output-amount").value;

  if (!inputAmount || parseFloat(inputAmount) <= 0) {
    alert("Please enter a valid amount to send!");
    return;
  }

  alert(`Swap confirmed!\nAmount to send: ${inputAmount}\nAmount to receive: ${outputAmount}`);
});

document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  const plusButton = document.getElementById("plus-btn");
  const minusButton = document.getElementById("minus-btn");

  if (counterElement && plusButton && minusButton) {
    let count = 0;

    plusButton.addEventListener("click", () => {
      count += 1;
      counterElement.textContent = count;
    });

    minusButton.addEventListener("click", () => {
      count -= 1;
      counterElement.textContent = count;
    });
  }
});

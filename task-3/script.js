function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const output = document.getElementById("output");

  if (input === "") {
    output.textContent = "Please enter a valid number!";
    return;
  }

  const temperature = parseFloat(input);
  let result;

  if (unit === "celsius") {
    result = (temperature * 9 / 5) + 32;
    output.textContent = `${result.toFixed(2)} °F`;
  } else {
    result = (temperature - 32) * 5 / 9;
    output.textContent = `${result.toFixed(2)} °C`;
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Grab values exactly when the button is clicked
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  // isNaN covers both empty strings and non-numeric text
  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please provide a valid weight.`;
  } else {
    // Math: weight (kg) / [height (m)]^2
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the result with a category
    let message = '';
    if (bmi < 18.6) message = 'Underweight';
    else if (bmi >= 18.6 && bmi <= 24.9) message = 'Normal Range';
    else message = 'Overweight';

    result.innerHTML = `<span>${bmi}</span> : <strong>${message}</strong>`;
  }
});

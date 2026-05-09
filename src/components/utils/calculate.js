function calculate(a, operator, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return 0;
  }
}

export default calculate;
import { useState } from "react";
import calculate from "../utils/calculate";

function useCalculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleNumber(value) {
    if (
        currentValue === "0" ||
        currentValue === "" 
    ) {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  }

  function handleOperator(op) {
    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue("");
  }

  function handleEqual() {
    if (!previousValue || !operator || !currentValue) {
      return;
    }

    const result = calculate(
      previousValue,
      operator,
      currentValue
    );

    setCurrentValue(String(result));

    setPreviousValue(null);
    setOperator(null);
  }

  function handleClear() {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  }

  function handleDelete() {
    if (
      currentValue.length <= 1 ||
      currentValue === ""
    ) {
      setCurrentValue("0");
    } else {
      setCurrentValue(
        currentValue.slice(0, -1)
      );
    }
  }

  function handleClick(value) {
    if (!isNaN(value) || value === ".") {
      handleNumber(value);
    }

    else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      handleOperator(value);
    }

    else if (value === "=") {
      handleEqual();
    }

    else if (value === "C") {
      handleClear();
    }

    else if (value === "DEL") {
      handleDelete();
    }
  }

  return {
    currentValue,
    handleClick,
  };
}

export default useCalculator;
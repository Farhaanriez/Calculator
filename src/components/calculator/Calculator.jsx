import "./calculator.css";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import useCalculator from "../hooks/useCalculator";

export default function Calculator() {
    const {
        currentValue,
        handleClick,
    } = useCalculator();

    return (
        <div className="calculator">
            <Display value={currentValue} />
            <ButtonGrid onClick={handleClick} />
        </div>
    )
}
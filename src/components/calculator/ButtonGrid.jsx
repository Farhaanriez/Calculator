import Button from "./Button";

export default function ButtonGrid({ onClick }) {
    const buttons = [
        "C",
        "()",
        "/",
        "DEL",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "+/-",
        "0",
        ".",
        "=",
    ]

    return (
        <div className="button-grid">
            {buttons.map((btn) => (
                <Button
                    key={btn}
                    label={btn}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}
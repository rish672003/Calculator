
const inputValue = document.getElementById("user-input");

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
        // Clear "NaN" or "0" when a number is clicked
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

const operationButtons = document.querySelectorAll(".operations");
operationButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const lastValue = inputValue.innerText.slice(-1); // Get the last character
        
        if (e.target.innerHTML === "=") {
            if (!isNaN(lastValue)) {
                try {
                    inputValue.innerText = eval(inputValue.innerText); // Caution with eval!
                } catch (error) {
                    inputValue.innerText = "NaN"; // Handle invalid expressions
                }
            }
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0"; // Clear the input
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1); // Remove last character
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0"; // Reset to 0 if empty
            }
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML; // Append operation
            }
        }
    });
});

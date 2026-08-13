let numbers = [];

function insertNumber() {
    const input = document.getElementById("numberInput");
    const value = Number(input.value);

    if (input.value === "" || value <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    numbers.push(value);

    input.value = "";

    displayNumbers();
}

function displayNumbers() {
    const list = document.getElementById("numberList");

    list.innerHTML = "";

    numbers.forEach((number, index) => {

        const row = document.createElement("div");
        row.className = "number-row";

        const numberValue = document.createElement("span");
        numberValue.className = "number-value";
        numberValue.textContent = number;

        const numberType = document.createElement("span");
        numberType.className = "number-type";

        if (number % 2 === 0) {
            numberType.textContent = "EVEN";
            numberType.classList.add("even");
        } else {
            numberType.textContent = "ODD";
            numberType.classList.add("odd");
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick = function () {
            removeNumber(index);
        };

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.onclick = function () {
            editNumber(index);
        };

        row.appendChild(numberValue);
        row.appendChild(numberType);
        row.appendChild(removeButton);
        row.appendChild(editButton);

        list.appendChild(row);
    });
}

function removeNumber(index) {
    numbers.splice(index, 1);

    displayNumbers();
    clearResult();
}

function editNumber(index) {
    const newValue = prompt(
        "Enter a new positive number:",
        numbers[index]
    );

    if (newValue === null) {
        return;
    }

    const value = Number(newValue);

    if (newValue.trim() === "" || value <= 0 || isNaN(value)) {
        alert("Please enter a valid positive number.");
        return;
    }

    numbers[index] = value;

    displayNumbers();
    clearResult();
}

function clearEntry() {
    document.getElementById("numberInput").value = "";
}

function clearItems() {
    numbers = [];

    displayNumbers();
    clearResult();

    document.getElementById("sortSelect").value = "";
}

function getTotal() {
    if (numbers.length === 0) {
        document.getElementById("result").textContent =
            "No numbers inserted.";
        return;
    }

    const total = numbers.reduce(
        (sum, number) => sum + number,
        0
    );

    document.getElementById("result").textContent =
        "Total: " + total;
}

function getHighestLowest() {
    if (numbers.length === 0) {
        document.getElementById("result").textContent =
            "No numbers inserted.";
        return;
    }

    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);

    document.getElementById("result").textContent =
        "Highest: " + highest + " | Lowest: " + lowest;
}

function sortNumbers() {
    const sortType = document.getElementById("sortSelect").value;

    if (sortType === "ascending") {
        numbers.sort((a, b) => a - b);
    }

    if (sortType === "descending") {
        numbers.sort((a, b) => b - a);
    }

    displayNumbers();
    clearResult();
}

function clearResult() {
    document.getElementById("result").textContent = "";
}
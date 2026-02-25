// State Variables //
let bank = [];
let odds = [];
let even = [];

// Adding number to bank //
function addNum(n) {
    bank.push(n);
    // console.log("Bank: ", bank);
    document.getElementById("bankTarget").textContent = bank.join(", ");
}

// Sorting one number //
function sortOne() {
    if (bank.length === 0) // stopping run short if no numbers left in the bank
        return;

    n = bank.shift(); // grabbing first value in the bank array

    if (n % 2 == 0) { // if the number is even, add it to the evebs
        even.push(n);
    } else if (n % 2 != 0) { // if odd, odds
        odds.push(n);
    } else
        return console.error('error! incorrect input');
    
    // once the location is determined and the state variable is updated, mirror that change on the document
    document.getElementById("bankTarget").textContent = bank.join(", ");
    document.getElementById("oddsTarget").textContent = odds.join(", ");
    document.getElementById("evensTarget").textContent = even.join(", ");

    // console.log("bank", bank);
    // console.log("odds", odds);
    // console.log("even", even);
}

// sorting all numbers //
function sortAll() {
    while (bank.length > 0) { // while loop allows the run to go until there are no numbers left in bank
        sortOne();
    }
}

function numberForm() {
    const $form = document.createElement("form"); // creating form
    // setting the inner html to be displayed with it 
    $form.innerHTML = `
        <label>
            Add a number to the bank
            <input name="userInput" type="number" min="1" />
        </label>
        <button type="submit" name="action" value="bank">Add Number</button>
        <button type="submit" name="action" value="sortOne">Sort 1</button>
        <button type="submit" name="action" value="sortAll">Sort All</button>
    `;
    // submit event listener to take the input and run it through the logic
    $form.addEventListener('submit', (event) => {
        event.preventDefault();

        let formData = new FormData($form);
        let action = event.submitter.value;
        console.log(action);
        let num = Number(formData.get('userInput'));
        console.log("number", num);
        // if conditions to tell which button was clicked, and run the associated task
        if (action === "bank") {
            addNum(num);
            console.log('test 1')
        }

        if (action === "sortOne") {
            sortOne(num);
            console.log('test 2')
        }

        if (action === "sortAll") {
            sortAll(num);
            console.log('test 3')
        }
    });
    return $form;
};
// render function displayes page dynamically
function render() {
    const $app = document.querySelector("#app");

    $app.innerHTML = `
    <h1>Odds and Events</h1>

    <NumberForm></NumberForm>
    
    <h2>Bank</h2>
    <banktarget id="bankTarget"></banktarget>
    
    <h2>Odds</h2>
    <oddstarget id="oddsTarget"></oddstarget>
    
    <h2>Evens</h2>
    <evenstarget id="evensTarget"></evenstarget>
    `;

    $app.querySelector("NumberForm").replaceWith(numberForm());
    $app.querySelector("banktarget").textContent = bank.join(", ");

    const bankTarget = document.getElementById("bankTarget");
    const oddsDiv = document.getElementById("oddsTarget");
    const evenDiv = document.getElementById("evensTarget");

    bankTarget.style.display = "block";
    bankTarget.style.border = "2px solid black";
    bankTarget.style.padding = "5px";
    bankTarget.style.minHeight = "30px";
    bankTarget.style.width = "85vw";
    bankTarget.style.margin = "0 auto";

    oddsDiv.style.display = "block";
    oddsDiv.style.border = "2px solid black";
    oddsDiv.style.padding = "5px";
    oddsDiv.style.minHeight = "30px";
    oddsDiv.style.width = "85vw";
    oddsDiv.style.margin = "0 auto";

    evenDiv.style.display = "block";
    evenDiv.style.border = "2px solid black";
    evenDiv.style.padding = "5px";
    evenDiv.style.minHeight = "30px";
    evenDiv.style.width = "85vw";
    evenDiv.style.margin = "0 auto";
}
render();
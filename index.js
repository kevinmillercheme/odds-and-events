let bank = [];
let odds = [];
let even = [];

function addNum(n) {
    bank.push(n);
}

function numberForm() {
    const $form = document.createElement("form");

    $form.innerHTML = `
        <label>
            Add a number to the bank
            <input name="userInput" type="number" min="1" />
        </label>
        <button type="submit" name="action" value="bank">Add Number</button>
        <button type="submit" name="action" value="sortOne">Sort 1</button>
        <button type="submit" name="action" value="sortAll">Sort All</button>
    `;

    $form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData($form);
        let action = formData.get("action");
        const num = Number(formData.get('userInput'));

        console.log("Action:", action);
        
        if (action === "bank") {
            addNum(num);
        }

        if (action === "sortOne") {
            // make sort 1 function
        }

        if (action === "sortAll") {
            // make sort all function
        }
    });
    return $form;
};

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
}
render();
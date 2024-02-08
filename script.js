function addExpense() {
    const name = document.getElementById("expenseName").value;
    const check= document.getElementById("expenseСheck").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    const totalExpensesElement = document.getElementById("totalExpenses");
    const totalExpenses = parseFloat(totalExpensesElement.textContent);
    totalExpensesElement.textContent = (totalExpenses + amount).toFixed(2);
    const listItem = document.createElement("li");
    listItem.textContent = `чек № ${check} ${name}: руб ${amount.toFixed(2)}`;
    document.getElementById("expenseList").appendChild(listItem);
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseСheck").value = "";
    document.getElementById("expenseAmount").value = "";
}

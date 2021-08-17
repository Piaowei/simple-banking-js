// Get input field value
function getInputValue(inputId) {

	const inputField = document.getElementById(inputId);
	const inputAmountText = inputField.value;
	const inputAmount = parseFloat(inputAmountText);
	// clear the deposit input field
	inputField.value = '';
	return inputAmount;
}
// Get inner text value of Total display
function updateTotalField(totalFieldId, amount) {
	// debugger;
	const totalDisplayAmount = document.getElementById(totalFieldId);
	const previousDisplayAmountText = totalDisplayAmount.innerText;
	const previousDisplayAmount = parseFloat(previousDisplayAmountText);
	const newAmountTotal = previousDisplayAmount + amount;
	totalDisplayAmount.innerText = newAmountTotal;
}

// original balance just
function getBalance() {
	const balanceTotal = document.getElementById("balance-total");
	const previousBalanceAmountText = balanceTotal.innerText;
	const previousBalanceAmount = parseFloat(previousBalanceAmountText);
	return previousBalanceAmount

}
// update account balance from diposit
function updateBalance(depositAmount, isAdd) {
	const balanceTotal = document.getElementById("balance-total");
	const previousBalanceAmountText = balanceTotal.innerText;
	const previousBalanceAmount = parseFloat(previousBalanceAmountText);
	if (isAdd == true) {
		const newBalanceTotal = depositAmount + previousBalanceAmount;
		balanceTotal.innerText = newBalanceTotal;
	}

	else {
		const newBalanceTotal = previousBalanceAmount - depositAmount;
		balanceTotal.innerText = newBalanceTotal;
	}

}

/* ----------------------------------------------------
handle diposit button event
--------------------------------------------------------*/

document.getElementById('diposit-button').addEventListener('click', function () {

	const depositAmount = getInputValue('diposit-input');
	if (depositAmount > 0) {
		updateTotalField('diposit-total', depositAmount);
		/* ----------------------------------------------------
		Update Account valance
		--------------------------------------------------------*/
		updateBalance(depositAmount, true);
	}

})

/* ----------------------------------------------------
handle withdraw button event
--------------------------------------------------------*/

document.getElementById('withdraw-button').addEventListener('click', function () {
	const totalBalance = getBalance();
	const withdrawAmount = getInputValue('withdraw-input');

	if (withdrawAmount <= totalBalance) {

		updateTotalField('withdraw-total', withdrawAmount);

		// update balance
		updateBalance(withdrawAmount, false);
	}
	if (withdrawAmount > totalBalance) {
		console.log("try again");
	}

})
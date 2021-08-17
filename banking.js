
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

// handle diposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
	// 	const inputField = document.getElementById('diposit-input');
	// 	const inputAmountText = inputField.value;
	// 	const inputAmount = parseFloat(inputAmountText);
	const depositAmount = getInputValue('diposit-input');
	// get ,set ,update deposit total
	/* 	const dipositTotal = document.getElementById("diposit-total");
		const previousDepositAmountText = dipositTotal.innerText;
		const previousDepositAmount = parseFloat(previousDepositAmountText);
		const newDepositTotal = previousDepositAmount + inputAmount;
		dipositTotal.innerText = newDepositTotal; */
	updateTotalField('diposit-total', depositAmount);


	/* ----------------------------------------------------
					Update Account valance
	--------------------------------------------------------*/

	/* 	const balanceTotal = document.getElementById("balance-total");
		const previousBalanceAmountText = balanceTotal.innerText;
		const previousBalanceAmount = parseFloat(previousBalanceAmountText);
		const newBalanceTotal = inputAmount + previousBalanceAmount;
		balanceTotal.innerText = newBalanceTotal; */
	updateBalance(depositAmount, true);

	// clear the deposit input field
	// inputField.value = '';
})

/* ----------------------------------------------------
				handle withdraw button event
--------------------------------------------------------*/

document.getElementById('withdraw-button').addEventListener('click', function () {
	// const withdrawInput = document.getElementById('withdraw-input');
	// newWithdrawAmountText = withdrawInput.value;
	// newWithdrawAmount = parseFloat(newWithdrawAmountText);
	const withdrawAmount = getInputValue('withdraw-input');
	// set , get ,set ,update withdraw Total
	/* 	const withdrawTotal = document.getElementById('withdraw-total');
		const previousWithdrawAmountText = withdrawTotal.innerText;
		const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
		const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
		withdrawTotal.innerText = newWithdrawTotal; */
	updateTotalField('withdraw-total', withdrawAmount);

	// clear the withdraw input field
	// final balance

	// const balanceTotal = document.getElementById("balance-total");
	// const previousBalanceAmountText = balanceTotal.innerText;
	// const previousBalanceAmount = parseFloat(previousBalanceAmountText);

	// const newBalanceTotal = previousBalanceAmount - withdrawAmount;
	// balanceTotal.innerText = newBalanceTotal;
	// withdrawInput.value = "";

	updateBalance(withdrawAmount, false);
})
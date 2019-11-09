function gofish() {
	const myHand = newHand([]);
	const cpu1 = newHand([]);
	const cpu2 = newHand([]);
	const cpu3 = newHand([]);	
}

function newHand() {
	const hand = [];
	for (let i = 0; i < 5; i++) {
		let x = Math.floor(Math.random() * 13 + 1);
		hand.push(x);
	}
	return hand;
}

function newCard(hand) {
	let x = Math.floor(Math.random() * 13 + 1);
	hand.push(x);
}

function guessCard(card, hand){
	for (let i = 0; i< hand.length - 1; i++){
		if (card === hand[i]){
			return true;
		}	
	}
	return false;
}
	function switchCard(card, hand){
		hand.push(card);
	}
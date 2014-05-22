$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	// console.log(deck[0],deck[10],deck[51]);
	
	//shuffle the deck
	deck = _.shuffle(deck);
	// console.log(deck[0],deck[10],deck[51]);
	
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	var deal = function(cards,hand1,hand2){
		for (var i = 0; i < cards.length; i++){
			if (i % 2 === 0){
				cards_player_1.push(cards[i]);
			} else {
				cards_player_2.push(cards[i]);
			}
		}
		// console.log(cards_player_1[0],cards_player_1[25],cards_player_2[0],cards_player_2[25]);
		return cards_player_1;
		return cards_player_2;
	};
	deal(deck,cards_player_1,cards_player_2);
	// console.log(cards_player_1[25],cards_player_2[25]);
	//divide out the cards into the two arrays
	
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card1,card2) {
		if (card1.number > card2.number){
			return card1;
		} else if (card2.number > card1.number) {
			return card2;
		} else {
			return "tie";
		}
	}
	
	// console.log(war(cards_player_1[0].number,cards_player_2[0].number));
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		// console.log(war(hand1[0],hand2[0]));
		var result = war(cards_player_1[0],cards_player_2[0]);
		if(result === cards_player_1[0]){
			cards_player_1.push(cards_player_1.shift(), cards_player_2.shift());
			console.log(result);
		} else if (result === cards_player_2[0]){
			cards_player_2.push(cards_player_1.shift(), cards_player_2.shift());
			console.log(result);
		} else if (result === "tie"){
			console.log(result);
			// debugger;
			cards_player_1.push(cards_player_1.shift());
			cards_player_2.push(cards_player_2.shift());
		}
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});
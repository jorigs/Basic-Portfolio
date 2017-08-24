var randomFactQuotes = ["In Utah, it is against the law to fish from the back of a horse." , "A snail can sleep for more than three years at a time." , "Everyone on earth is born with the ability to wiggle their ears, but if you don’t learn how early on, the muscle atrophies and you can’t learn any longer." , "The flamingo can only eat when its head is upside down." , "If you put a can of Diet Coke in water, it floats. Regular Coca-Cola sinks." , "78% of NFL players are bankrupt two years after finishing their careers." , "There is no word that rhymes with month." , "Nachos were invented by a guy named Nacho." , "111,111,111 x 111,111,111 = 12,345,678,987,645,321"] 


$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * randomFactQuotes.length));
	$("#quoteDisplay").text(randomFactQuotes[number])
})

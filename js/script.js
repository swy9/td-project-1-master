// Creating an array of objects and assigning it as a variable name quotes

var quotes = [
    {
        quote : "You don't realize Jesus is all you need until Jesus is all you have.",
        source : "Timothy Keller",
        citation : "Counterfeit Gods"
    },
    {
        quote : "I believe purpose is something for which one is responsible; It's not just divinely assigned.",
        source : "Michael J. Fox",
    },
    {
        quote : "If you organize your life around your passion, you can turn your passion into your story and then turn your story into something bigger - something that matters.",
        source : "Blake Mycoskie"
    },
    {
        quote : "The self is made, not give.",
        source : "Barbara Myerhoff"
    },
    {
        quote : "Well, just tell him to call me as asap as possible.",
        source : "Michael Scott",
        citation : "Office"
    },
    {
        quote : "Hate to see you leave, but love to watch you go... 'Cause of your butt",
        source : "Michael Scott",
        citation : "Office"
    },
    {
        quote : "You miss 100% of the shots you don't take - Wayne Gretzky",
        source : "Michael Scott",
        citation : "Office"
    },
    {
        quote : "If your eye causes you to stumble, gouge it out and throw it away. It is better for you to enter life with one eye than to have two eyes and be thrown into the fire of hell.",
        source : "Jesus",
        citation : "Matthew 18:8-9",
        year : 80
    },
    {
        quote : "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
        source : "Winston Churchill",
        year : 1947
    },
    {
        quote : "I always wanted to be somebody, but now I realize I should have been more specific.",
        source : "Lily Tomlin"
    },
    {
        quote : "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.",
        source : "Kanye West"
    },
    {
        quote : "Obstacles are those frightful things you see when you take your eyes off the goal.",
        source : "Henry Ford"
    }
];

// This function randomly picks an rgb color value, using a for loop 

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// This function randomly picks the quote object from an quotes array. 

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};
// This function prints out the return values from the previous functions I created and place the values
// into the designated section in an HTML file. 

function printQuote() {
    document.body.style.backgroundColor = getRandomColor();
    var outQuote = getRandomQuote();
    var string = '<p class="quote">' + outQuote.quote + '</p>' + '<p class="source">' + outQuote.source;
	if (outQuote.citation) {
		string += '<span class="citation">' + outQuote.citation + '</span>'
	}
	if (outQuote.year) {
		string += '<span class="year">' + outQuote.year + '</span>'
	}
	'</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = string;
}

// This DOM allows our button to load the printQuote function so that new random quote object will pop up on the screen.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


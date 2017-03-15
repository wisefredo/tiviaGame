var seconds = 60;
var interval = setInterval(function(){
	if (seconds === 0) {
		clearInterval(interval);
	}
	$("#time").text(seconds)
	seconds--;
}, 1000)

var one = 1;
var two = 2;
var three = 3;
var four = 4;

$(document).ready(function(){

	$("#submit").on("click",function(){
		checkOne();
		checkTwo();
		checkThree();
		checkFour();
	});

});

function checkOne(){

	var oneAns = $('.one:checked').data("val");
	
	if (two==oneAns) {
		console.log("correct");
		$('#oneC').append('<p class ="correct">Correct</p>')
	} else {
		console.log("incorrect")
		$('#oneC').append('<p class ="wrong">Wrong</p>')
	}
}

function checkTwo(){
		var oneAns = $('.two:checked').data("val");
	
	if (one==oneAns) {
		console.log("correct");
		$('#oneC').append('<p class ="correct">Correct</p>')
	} else {
		console.log("incorrect")
		$('#oneC').append('<p class ="wrong">Wrong</p>')
	}
	
}

function checkThree(){
		var oneAns = $('.three:checked').data("val");
	
	if (one==oneAns) {
		console.log("correct");
		$('#oneC').append('<p class ="correct">Correct</p>')
	} else {
		console.log("incorrect")
		$('#oneC').append('<p class ="wrong">Wrong</p>')
	}
	
}

function checkFour(){
		var oneAns = $('.one:checked').data("val");
	
	if (one==oneAns) {
		console.log("correct");
		$('#oneC').append('<p class ="correct">Correct</p>')
	} else {
		console.log("incorrect")
		$('#oneC').append('<p class ="wrong">Wrong</p>')
	}

}





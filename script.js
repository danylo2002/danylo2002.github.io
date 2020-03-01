	$("document").ready(function(){
	$(".box4-simple-button").click(function(){
		let х = this.id;
		if (х == "box4-simple-button1") {
			document.getElementById("box4-more1").style.transform = "scale(1)";
			document.getElementById("box4-more2").style.transform = "scale(0)";
			document.getElementById("box4-more3").style.transform = "scale(0)";
			document.getElementById("box4-simple-content1").style.transform = "scale(1)";
			document.getElementById("box4-simple-content2").style.transform = "scale(0)";
			document.getElementById("box4-simple-content3").style.transform = "scale(0)";
		}
	else if (х == "box4-simple-button2") {
			document.getElementById("box4-more1").style.transform = "scale(0)";
			document.getElementById("box4-more2").style.transform = "scale(1)";
			document.getElementById("box4-more3").style.transform = "scale(0)";
			document.getElementById("box4-simple-content1").style.transform = "scale(0)";
			document.getElementById("box4-simple-content2").style.transform = "scale(1)";
			document.getElementById("box4-simple-content3").style.transform = "scale(0)";
	}
	else if (х == "box4-simple-button3") {
			document.getElementById("box4-more1").style.transform = "scale(0)";
			document.getElementById("box4-more2").style.transform = "scale(0)";
			document.getElementById("box4-more3").style.transform = "scale(1)";
			document.getElementById("box4-simple-content1").style.transform = "scale(0)";
			document.getElementById("box4-simple-content2").style.transform = "scale(0)";
			document.getElementById("box4-simple-content3").style.transform = "scale(1)";
	}
	})
	
})
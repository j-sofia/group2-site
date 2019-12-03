writeMOTD = function () {
    var motd = new Array();
    motd[0] = "We would love to see you here!";
    motd[1] = "Our courts are ready for you!";
    motd[2] = "Thanks for checking us out!";
	motd[3] = "See you on the court!";
	motd[4] = "Remember to always play safe!";
    var rand = Math.floor(Math.random()*motd.length);
    document.write(motd[rand]);
}

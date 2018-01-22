
$(function() {
	var listaKaruzeli = $('div').find('ul');
	setInterval(zmienSlajda, 3000);
	function zmienSlajda() {
		listaKaruzeli.animate({'marginLeft':-800}, 500, przesunPierwszySlajd());
	};

	function przesunPierwszySlajd() {
		var pierwszySlajd = listaKaruzeli.find("li:first");
		var ostatniSlajd = listaKaruzeli.find("li:last");	
		ostatniSlajd.after(pierwszySlajd);
		listaKaruzeli.css({marginLeft:0});
	};
});

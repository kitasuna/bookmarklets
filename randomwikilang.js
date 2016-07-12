/*
 * Open the main page of Wikipedia in a random language
 * Array of language codes pulled from:
 * https://en.wikipedia.org/wiki/List_of_Wikipedias
 *
 */

(function(){
	var langs = [
		"ca",	/*Catalan*/
		"ceb",	/*Cebuano*/
		"de",	/*German*/
		"en",	/*English*/
		"es",	/*Spanish*/
		"fa",	/*Persian*/
		"fr",	/*French*/
		"it",	/*Italian*/
		"ja",	/*Japanese*/
		"nl",	/*Norweigian*/
		"no",	/*Norwegian (Bokmal)*/
		"pl",	/*Polish*/
		"pt",	/*Portuguese*/
		"ru",	/*Russian*/
		"sv",	/*Swedish*/
		"uk",	/*Ukranian*/
		"war",	/*Winaray*/
		"vi",	/*Vietnamese*/
		"zh",	/*Chinese*/
		];
	window.location.href = 'http://'+langs[Math.floor(Math.random()*langs.length)]+'.wikipedia.org';
})();

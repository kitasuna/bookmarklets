/*
 * Open the main page of Wikipedia in a random language
 * Array of language codes pulled from:
 * https://en.wikipedia.org/wiki/List_of_Wikipedias
 *
 */

(function(){
	var langs = ["en","sv","ceb","de","nl","fr","ru","war","it","es","pl","vi","ja"];
	window.location.href = 'http://'+langs[Math.floor(Math.random()*langs.length)]+'.wikipedia.org';
})();

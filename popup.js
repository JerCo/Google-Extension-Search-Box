// make sure the document has loaded
document.addEventListener('DOMContentLoaded', function() {
	// select the button by id and add a listener the Chrome way
	var button = document.getElementById('clickme');
	button.addEventListener('click', function () {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			// get the value entered in the search box and put in variable
			search_terms = document.getElementById('search_for').value;
			// set the variable in local storage to pass to background script
			chrome.storage.local.set({"search_for": search_terms});
			chrome.tabs.create({url: 'http://www.google.com'});
		});
	});
});


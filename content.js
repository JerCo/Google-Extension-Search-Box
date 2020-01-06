// check for message sent from background script after the page has loaded
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	// check the searched variable sent from background as a request
	if (request.searched != undefined){
		searched = request.searched;
		// add to the fields in google and click the button
		if (location == "https://www.google.com/"){
			document.getElementsByName("q")[0].value = searched;
			document.getElementsByName("btnK")[0].click();
		};
	};
});

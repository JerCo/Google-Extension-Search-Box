// waiting for newly opened tab to load
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var searched;
	if (changeInfo.status == 'complete') {
		chrome.tabs.query({ active: true }, function(tabs) {  
			// get searched terms set local storage in popup.js
			chrome.storage.local.get(['search_for'], function(result) {
				searched = result.search_for;
				// sends a message to the content script for the searched term
				chrome.tabs.sendMessage(tabs[0].id, { "searched": searched });
			});
		});
	};
});




	chrome.browserAction.onClicked.addListener(function(tab) {
	  
	  chrome.tabs.executeScript({
		code: 'var d = new Date (); d.setDate(d.getDate(); document.activeElement.value = d.toLocaleDateString("fr); '
	  });
	  
	  
	});
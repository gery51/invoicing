
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'app';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	//set the text beside the login button
	IN.userSettings = ds.User.getSettings();
	
	debugger;
	//Set UI strings
	$.getScript('customScripts/languages/' + IN.userSettings.language + '.js', function(){
		alert('loaded' + IN.userSettings.language + '.js');

	});
	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock


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
	
	//Set UI strings
	$.getScript('customScripts/languages/' + IN.userSettings.language + '.js', function(){
		//set strings on interface page
		$$(getHtmlId('languageTest')).setValue(IN.strings.greeting);

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

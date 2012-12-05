
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
		//set strings on interface page using variables from language file
		//TODO: do this

	});
	// @region namespaceDeclaration// @startlock
	var staffButton = {};	// @button
	var clientsButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	staffButton.click = function staffButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('peopleTabComp')).loadComponent('components/staff.waComponent');
	};// @lock

	clientsButton.click = function clientsButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('peopleTabComp')).loadComponent('components/clients.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_staffButton", "click", staffButton.click, "WAF");
	WAF.addListener(this.id + "_clientsButton", "click", clientsButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock


(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'register';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var registerButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	registerButton.click = function registerButton_click (event)// @startlock
	{// @endlock
		//TODO: add client side validation to reg form
		var validated = true; //remove when validation is implemented
		
		if(validated){
			//run the registration method on the server
			ds.Registration.newRegistration(WAKLIB.utils.datasourceToObject($comp.sources.regObject));
		} else {
			
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_registerButton", "click", registerButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

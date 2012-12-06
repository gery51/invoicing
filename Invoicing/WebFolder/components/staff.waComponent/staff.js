
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'staff';
	// @endregion// @endlock

	this.load = function (data) {// @lock
alert('loaded');
	// @region namespaceDeclaration// @startlock
	var saveButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	saveButton.click = function saveButton_click (event)// @startlock
	{// @endlock
		debugger;
		$comp.sources.user.save({
			onSuccess: function(event){
				debugger;
			},
			onError: function(err){
				debugger;
			}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_saveButton", "click", saveButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

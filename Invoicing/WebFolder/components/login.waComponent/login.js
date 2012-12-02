
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'login';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var loginButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		//login using provided credentials from input widgets
//		WAF.directory.login($$(getHtmlId('usernameInput')).getValue(), $$(getHtmlId('passwordInput')).getValue(), {
//			onSuccess: function(event){
//				console.log('success');
//				debugger;
//			},
//			onError: function(err){
//				//TODO: bug? Why is this firing? Error is not descriptive
//				console.log('failed');
//				debugger;
//			}
//		});
		//TODO: call async as above when I figure out what's wrong with it
		WAF.directory.login($$(getHtmlId('usernameInput')).getValue(), $$(getHtmlId('passwordInput')).getValue());
		
		window.location = 'index.html';
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_loginButton", "click", loginButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

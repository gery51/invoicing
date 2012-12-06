
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
//		WAF.directory.login($$('usernameInput').getValue(), $$('passwordInput').getValue());

//login using provided credentials from input widgets
		WAF.directory.login($$('usernameInput').getValue(), $$('passwordInput').getValue(), {
			onSuccess: function(event){
				$$('mainNavigation').goToView(2);
			},
			onError: function(err){
				//TODO: handle error
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock

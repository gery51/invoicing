
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() == null){
			$$('page').loadComponent('components/register.waComponent');
			$$('login').loadComponent('components/login.waComponent');
		} else {
			$$('page').loadComponent('components/app.waComponent');
			$$('login').loadComponent('components/loggedIn.waComponent');
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

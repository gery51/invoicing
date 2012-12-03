
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		//Minimum size for app
		var vMinW = 800;
		var vMinH = 600;
		$(window).resize(function(){
			if($(window).height() < vMinH){
				$$('page').addClass('minHeight');
			} else {
				$$('page').removeClass('minHeight');
			}
			if($(window).width() < vMinW){
				$$('page').addClass('minWidth');
			} else {
				$$('page').removeClass('minWidth');
			}
		});
		$(window).resize();
		
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

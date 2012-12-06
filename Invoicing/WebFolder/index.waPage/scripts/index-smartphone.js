
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var clientsButton = {};	// @button
	var expensesButton = {};	// @button
	var invoicesButton = {};	// @button
	var projectsButton = {};	// @button
	var logoutButton = {};	// @button
	var loginButton = {};	// @button
// @endregion// @endlock
if(WAF.directory.currentUser() !== null){
	$$('mainNavigation').goToView(2);
}
// eventHandlers// @lock

	clientsButton.click = function clientsButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(7);
	};// @lock

	expensesButton.click = function expensesButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(4);
	};// @lock

	invoicesButton.click = function invoicesButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(5);
	};// @lock

	projectsButton.click = function projectsButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(6);
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout(); //Log out session
//		$$('mainNavigation').goToView(1); //Go to login screen
		window.location = 'index';
	};// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock

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
	WAF.addListener("clientsButton", "click", clientsButton.click, "WAF");
	WAF.addListener("expensesButton", "click", expensesButton.click, "WAF");
	WAF.addListener("invoicesButton", "click", invoicesButton.click, "WAF");
	WAF.addListener("projectsButton", "click", projectsButton.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
// @endregion
};// @endlock

﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	var overViewButton = {};	// @button
	var backbutton1 = {};	// @button
	var projectSaveButton = {};	// @button
	var newProjectButton = {};	// @button
	var addTimerButton = {};	// @icon
	var timerListButton = {};	// @icon
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

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(8);
	};// @lock

	overViewButton.click = function overViewButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(2);
	};// @lock

	backbutton1.click = function backbutton1_click (event)// @startlock
	{// @endlock
		if($$('mainNavigation').visibleView === "1"){
			//Back button to the login view
			WAF.directory.logout();
		}

	};// @lock

	projectSaveButton.click = function projectSaveButton_click (event)// @startlock
	{// @endlock
		sources.project.save({
			onSuccess: function(event){
				debugger;
				$$('mainNavigation').goToPreviousView();
			}	
		});
	};// @lock

	newProjectButton.click = function newProjectButton_click (event)// @startlock
	{// @endlock
		sources.project.addNewElement();
		$$('mainNavigation').goToView(8);
	};// @lock

	addTimerButton.click = function addTimerButton_click (event)// @startlock
	{// @endlock
		sources.timeEntry.addNewElement();
	};// @lock

	timerListButton.click = function timerListButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(3); //Go to timer view
	};// @lock

	clientsButton.click = function clientsButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(7); //Go to Client view
	};// @lock

	expensesButton.click = function expensesButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(4); //Go to Expenses view
	};// @lock

	invoicesButton.click = function invoicesButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(5); //Go to Invoices view
	};// @lock

	projectsButton.click = function projectsButton_click (event)// @startlock
	{// @endlock
		$$('mainNavigation').goToView(6); //Go to Project view
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout(); //Log out session
		window.location = 'index'; //Go to login screen without a back button
	};// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		//login using provided credentials from input widgets
		WAF.directory.login($$('usernameInput').getValue(), $$('passwordInput').getValue(), {
			onSuccess: function(event){
				if(event.result === true){
					//login successful
					$$('usernameInput').setValue(''); //Clear both input fields
					$$('passwordInput').setValue('');
					$$('mainNavigation').goToView(2);
				} else {
					//login unsuccessful
				}
			},
			onError: function(err){
				//TODO: handle error
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener("overViewButton", "click", overViewButton.click, "WAF");
	WAF.addListener("backbutton1", "click", backbutton1.click, "WAF");
	WAF.addListener("projectSaveButton", "click", projectSaveButton.click, "WAF");
	WAF.addListener("newProjectButton", "click", newProjectButton.click, "WAF");
	WAF.addListener("addTimerButton", "click", addTimerButton.click, "WAF");
	WAF.addListener("timerListButton", "click", timerListButton.click, "WAF");
	WAF.addListener("clientsButton", "click", clientsButton.click, "WAF");
	WAF.addListener("expensesButton", "click", expensesButton.click, "WAF");
	WAF.addListener("invoicesButton", "click", invoicesButton.click, "WAF");
	WAF.addListener("projectsButton", "click", projectsButton.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
// @endregion
};// @endlock

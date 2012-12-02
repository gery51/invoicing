﻿//Methods(Entity Methods, Collection Methods, Datastore Class Methods), Events (Attribute Events, Datastore Class Events, Calculated Attributes)model.User = {};//*** METHODSmodel.User.entityMethods = {};model.User.entityMethods.validatePassword = function(password){	//validate if the hash in the User datastore class matches for the provided userName/password	var hash = directory.computeHA1(this.ID, password);	return (hash === this.HA1Key); //return true or false depending on match status}model.User.entityMethods.validatePassword.scope = 'publicOnServer';//model.XXXX.collectionMethods = {};//model.XXXX.methods = {};//*** EVENTSmodel.User.username = {};model.User.username.events = {};model.User.username.events.onValidate = function(){	if(this.username == 'admin'){		return {error: 100, errorMessage: 'cannot use admin as username - reserved'};			}	}model.User.language = {};model.User.language.events = {};model.User.language.events.onInit = function(){	this.language = 'en'; //set the default language of a new user to en}//model.User.events = {};//Calculated attributesmodel.User.password = {};model.User.password.onSet = function(password){	//calculate and save HA1Key based on incoming password and user ID attribute (uuid)	this.HA1Key = directory.computeHA1(this.ID, password);}model.User.password.onGet = function(){	//Return null as the password is not stored in the datastore class	return null;}
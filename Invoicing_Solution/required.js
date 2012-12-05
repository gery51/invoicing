var userLogin = function(username, password){	//find the user	var dsProj = solution.getApplicationByName("Invoicing").ds;	var theUser = dsProj.User({username: username});		if(theUser === null) { //could not find a matching user		return false; //let the directory try authentication (ie. admin user at server startup)	} else {		//validate based on credentials in the user datastore class		if(theUser.validatePassword(password)){			//user validated using the ds.User.validatePassword method			var groups = []; //build an array of the group names this user belongs to			theUser.groups.forEach(function(entity){				groups.push(entity.name);			});			//TODO: figure out how to include files from the project directory			//load the appropriate language server side//			require('../Invoicing/scripts/language/' + theUser.language); ****** cannot do a relative include						return {				ID: theUser.ID,				name: theUser.username,				fullName: theUser.fullName,				belongsTo: groups, //array of groups to which this user belongs				storage: {					accountID: theUser.account.ID, //store the accountID in user session storage for easy retrieval					language: theUser.language //set langauge prefs for user in session storage				}					}		} else {			//did not validate against User datastore class, return error			return {error: 100, errorMessage: 'Did not log in successfully'}; //TODO: multi language		}	}}
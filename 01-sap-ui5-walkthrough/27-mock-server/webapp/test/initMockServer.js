/* 
This will be called from the mockServer.html on Init method
Here we are loading the mockserver.js file in localService folder
and then we are calling its init method
We are also using ComponentSupport, this was earlier in index.html's onInit
 */
sap.ui.define([
	"../localService/mockserver"
], function (mockserver) {
	"use strict";

	// initialize the mock server
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});

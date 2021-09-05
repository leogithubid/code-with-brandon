sap.ui.define([
	"sap/ui/core/util/MockServer",//load Mock Server
	"sap/base/util/UriParameters"//load Uri parameters
], function (MockServer, UriParameters) {
	"use strict";

	return {
        //init method - this will be called from initMockServer.js
		init: function () {
			// create
			var oMockServer = new MockServer({
                //point to North Wind
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
			});

            //create uri parameters
			var oUriParameters = new UriParameters(window.location.href);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});

			// simulate - we are calling a simulate method - But why?
            //To simulate call to North wind using metadata.xml which was created
            //using the $metadata of original service and
            //we call the Invoices.json file with the path /mockdata
			var sPath = "../localService";
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start the mock server
			oMockServer.start();
		}
	};

});

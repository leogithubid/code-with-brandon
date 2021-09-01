sap.ui.define([
"sap/ui/core/util/MockServer", //load mock server
"sap/base/util/UriParameters"  //load uri parameters
], function(MockServer, UriParameters) {
    'use strict';
    
    return {
    //initialise
    init : function(){

        //create mock server
        var oMockServer = new MockServer({
            rootUri : "https://services.odata.org/V2/Northwind/Northwind.svc/"
        });

        //create uri parameters
        var oUriParameters = new UriParameters(window.location.href);//this is standard
        //all the required things came up from just the help

        //configure mock server
        MockServer.config({
            autoRespond : true,
            autoRespondAfter : oUriParameters.get("serverDelay") || 500
        });

        //simulate
        var sPath = "../localService";

        oMockServer.simulate(sPath + "/metadata.xml" , sPath+"/mockdata");

        //start
        oMockServer.start();

    }

    };
});
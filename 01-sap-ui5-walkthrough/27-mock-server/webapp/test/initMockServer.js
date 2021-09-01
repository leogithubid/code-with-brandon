sap.ui.define([
"../localService/mockserver" //this points to mock server in local service folder
], function(mockserver) {
    'use strict';
    
    //iniitalize mock server - call init function in the mockserver.js
    mockserver.init();

    //iniitalize componnet.support
    sap.ui.require("sap/ui/core/ComponentSupport"); //this is moved from index.html to here
    //in index.html or mock.html we point to this js file instead of component support
});
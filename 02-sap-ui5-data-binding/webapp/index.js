sap.ui.require([
    "sap/m/Text"
],function(Text){
    "use strict";

    //attach a function to init event
    sap.ui.getCore().attachInit(function(){
        new Text({
            text : "Welcome to UI5 Data Binding "
        }).placeAt("content");
    });
});
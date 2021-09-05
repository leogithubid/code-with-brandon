sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
],function(Text,JSONModel){
    "use strict";
    //create an object of JSON Model and write some text to it
    var oModel = new JSONModel({
        greetingText : "Welcome to UI5 Data Binding - with JSON Model"
    });

    //attach the model to the core for now, in prodution apps - we do it for views
    sap.ui.getCore().setModel(oModel);

    //attach a function to init event
    sap.ui.getCore().attachInit(function(){
        new Text({
            text : "{/greetingText}"
        }).placeAt("content");
    });
});
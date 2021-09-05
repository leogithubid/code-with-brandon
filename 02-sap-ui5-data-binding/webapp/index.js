sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView"
],function(Text,JSONModel,XMLView){
    "use strict";

    //create an object of JSON Model and write some text to it
    var oModel = new JSONModel({
        panelHeaderText : "Welcome to UI5 Data Binding - with JSON Model",
        firstName : "Liyon",
        lastName : "SV",
        enabled : true
    });

    //attach the model to the core for now, in prodution apps - we do it for views
    sap.ui.getCore().setModel(oModel);

    //attach a function to init event
    sap.ui.getCore().attachInit(function(){
        new XMLView({
            viewName : "sap.ui.demo.db.view.App"
        }).placeAt("content");
    });
});
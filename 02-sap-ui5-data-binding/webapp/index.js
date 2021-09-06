sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
],function(Text,JSONModel,XMLView,BindingMode,ResourceModel){
    "use strict";

    //create an object of JSON Model and write some text to it
    var oModel = new JSONModel({
        //added new properites to json MODEL 
        //these properties will be bound in the XML View
        panelHeaderText : "Welcome to UI5 Data Binding - with JSON Model",
        firstName : "Liyon",
        lastName : "SV",
        enabled : true
    });

    //make the binding oneway
    oModel.setDefaultBindingMode(BindingMode.OneWay);

    //attach the model to the core for now, in prodution apps - we do it for views
    sap.ui.getCore().setModel(oModel);

    //create i18n model
    var oResourceModel = new ResourceModel({
        bundleName : "sap.ui.demo.db.i18n.i18n",
        supportedLocales : ["","de"],
        fallbackLocale : ""
    });

    //attach the model to the core
    sap.ui.getCore().setModel(oResourceModel,"i18n");

    //attach a function to init event
    sap.ui.getCore().attachInit(function(){
        new XMLView({
            viewName : "sap.ui.demo.db.view.App" //point to view folder->App.view.xml
        }).placeAt("content");
    });
});
sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
],function(Text,JSONModel,XMLView,BindingMode,ResourceModel){
    "use strict";

    //create a JSON model object
    var oProductModel = new JSONModel();
    //load data from the json file linked
    oProductModel.loadData("./model/Products.json");
    //attach the model to the core with id "products"
    sap.ui.getCore().setModel(oProductModel, "products");

    //create an object of JSON Model and write some text to it
    var oModel = new JSONModel({
        //added new properites to json MODEL 
        //these properties will be bound in the XML View
        panelHeaderText : "Welcome to UI5 Data Binding - with JSON Model",
        firstName : "Liyon",
        lastName : "SV",
        enabled : true,
        address : {
            street : "8 Cowper Street",
            city : "Parramatta",
            zip : "2150",
            country : "Australia"
        },
        salesAmount : 12345.6789,//This amount will be formatter in the
        currencyCode : "AUD"
    });

    //make the binding oneway
    //oModel.setDefaultBindingMode(BindingMode.OneWay);

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

    //create a view
    var oView = new XMLView({
        viewName : "sap.ui.demo.db.view.App"
    });

    //register view the message manager to display errors on input currency field
    //when we format a field it can validate whether the input adheres to the
    //data type, but to view the message we have to register the view like this
    sap.ui.getCore().getMessageManager().registerObject(oView,true);

    //place the view at the content
    oView.placeAt("content");

});
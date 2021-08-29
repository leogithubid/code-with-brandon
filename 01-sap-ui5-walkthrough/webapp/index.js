sap.ui.define([
    //"sap/m/Text" //step4 - this is commented and replaced with XML View
    "sap/ui/core/mvc/XMLView"
], function(XMLView) {
    'use strict';
   
    //step 2- on init this file will be loaded and it will call an alert
    //step 3 - commented this and added text control
    //and then place it in the content 
    //alert("Get,Set,Go!");
    //new Text({
    //    text : "Hello UI5!"
    //}).placeAt("content");
    //step 4 - the above is commented adn replaced with XML View
    //use create method of XML View and then make use of Javascript promise
    XMLView.create({
        viewName : "sap.ui.demo.walkthrough.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });

});
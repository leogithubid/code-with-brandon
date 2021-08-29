sap.ui.define([
    "sap/m/Text"
], function(Text) {
    'use strict';
   
    //step 2- on init this file will be loaded and it will call an alert
    //step 3 - commented this and added text control
    //and then place it in the content 
    //alert("Get,Set,Go!");
    new Text({
        text : "Hello UI5!"
    }).placeAt("content");

});
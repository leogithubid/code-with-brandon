sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList",{
        //initialize
        onInit:function(){
            //create a JSON View Model
            var oViewModel = new JSONModel({
                currency : "AUD"
            });
            //set that to the view
            this.getView().setModel(oViewModel,"view");
        }
    });
});
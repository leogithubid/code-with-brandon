sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"../model/formatter" //load the custom formatter
], function(Controller,JSONModel,formatter) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList",{
        //create a reference to the formatter that can be used from the view
        formatter : formatter,
        //initialize
        onInit:function(){            //create a JSON View Model
            var oViewModel = new JSONModel({
                currency : "AUD"
            });
            //set that to the view, so that we can reference the currency code there
            this.getView().setModel(oViewModel,"view");
        }
    });
});
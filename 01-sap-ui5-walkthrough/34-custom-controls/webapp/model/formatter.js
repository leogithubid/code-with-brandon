/* In this file we will be creating a formatter function that takes 
   single character invoice status and then return corresponding Status Text Description
   these descriptions will be stored in i18n file
   We will call this file from Invoice List View
   For this we have to load this in its controller ie,InvoiceList.controller */
sap.ui.define([
], function() {
    'use strict';
    return {
        //status text function 
        statusText : function(sStatus){
            console.log("formatter is called");
            //get the i18n file
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            //use switch 
            switch(sStatus){
                case "A" : 
                    //return the corresponding description from i18n
                    return oResourceBundle.getText("invoiceStatusA");
                case "B" : 
                    return oResourceBundle.getText("invoiceStatusB");
                case "C" : 
                    return oResourceBundle.getText("invoiceStatusC");
            }
        }
    }
});
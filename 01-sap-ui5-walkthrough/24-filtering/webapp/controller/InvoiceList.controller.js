/*  Add a filter method */
sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"../model/formatter", //load the custom formatter
"sap/ui/model/Filter",//load Filter
"sap/ui/model/FilterOperator"//load Filter Operator
], function(Controller,JSONModel,formatter,Filter,FilterOperator) {
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
        },
        onSearchInvoices:function(oEvent){
            console.log(oEvent.getParameters());

            //create Filter
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if(sQuery){
            //    aFilter.push( new Filter("ProductName",FilterOperator.Contains, sQuery));
            var oFilter = new Filter("ProductName",FilterOperator.Contains,sQuery);
            aFilter.push(oFilter);
            }

            //get the invoice list
            var oList = this.byId("invoiceList");//we have to give id to the list control
            //get the binding to items
            var oBinding = oList.getBinding("items");
            //link the filter
            oBinding.filter(aFilter);
        }
    });
});
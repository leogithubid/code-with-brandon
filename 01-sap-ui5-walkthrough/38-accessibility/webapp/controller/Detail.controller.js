/* 
    In the learning sap vidoes we were using Route Pattern Matched
    Here we are using Pattern Matched
    Load History control and also add a method for navigating back
 */
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",//-->History dependency
        "sap/m/MessageToast", //-->message toast
        "sap/ui/model/json/JSONModel"
    ], function (Controller,History,MessageToast, JSONModel) {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
            onInit: function () {
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });
                this.getView().setModel(oViewModel, "view");

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                this.byId("rating").reset();//for custom control
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "invoice"
                });
            },
            onNavBack : function(){
                //previous hash
                var sPreviousHash = History.getInstance().getPreviousHash();

                //if hash is found
                if(sPreviousHash !== undefined){
                    window.history.go(-1);//go to one page back  
                }else{
                    //otherwise go to overview page
                    this.getOwnerComponent().getRouter().navTo("overview",{},true);
                }
            },
            onRatingChange:function(oEvent){
                var fvalue = oEvent.getParameter("value") ;
                var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
                MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fvalue]));
            }
        });
    });
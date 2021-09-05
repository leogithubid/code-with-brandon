/* Just the standard scaffolding template */
sap.ui.define([
    "sap/ui/core/mvc/Controller",//load controller 
], function (Controller, MessageToast) {
    'use strict';
    //controller.extend and give the path to the controller
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            //content denstiy
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog:function(){
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
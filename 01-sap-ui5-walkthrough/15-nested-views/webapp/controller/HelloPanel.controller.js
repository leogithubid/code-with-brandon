sap.ui.define([
    "sap/ui/core/mvc/Controller",//load controller 
    "sap/m/MessageToast"        //lad module and use it in the constructor argument
], function (Controller, MessageToast) {
    'use strict';
    //controller.extend and give the path to the controller
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            //moved to Component JS
        },
        //Then create the press event handler function to say hello
        onShowHello: function () {

            //Get the i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //get JSON Model data
            var sName = this.getView().getModel().getProperty("/recipient/name");
            //concatenate and create message
            var oMessage = oBundle.getText("helloMsg", sName);

            //message toast
            MessageToast.show(oMessage);
        }
    });
});
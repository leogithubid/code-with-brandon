sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" //step 6 - load module and use it in the constructor argument
], function (Controller, MessageToast) {
    'use strict';
    //controller.extend and give the path to the controller
    Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            //moved to Component JS
        },
        //Step 5 - then create the press event handler function to say hello
        onShowHello: function () {
            //alert("Hello I am controller, how are you? ");

            //Step 8 - get the i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //get JSON Model data
            var sName = this.getView().getModel().getProperty("/recipient/name");
            //concatenate and create message
            var oMessage = oBundle.getText("helloMsg", sName);

            //Step 6 - the above alert is replaced with a message toast
            MessageToast.show(oMessage);
        }
    });
});
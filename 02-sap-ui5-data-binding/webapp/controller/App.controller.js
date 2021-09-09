sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library"
], function(Controller,mobileLibrary) {
    'use strict';
    return Controller.extend("sap.ui.demo.db.controller.App",{
        //this function will be called from the Link control in the App view
        formatMail:function(sFirstName,sLastName){
            //get resource bundle
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            //return url helper with
            //mailto:email id, subject and email body from i18n
            return mobileLibrary.URLHelper.normalizeEmail(
                sFirstName + "." + sLastName + "@gmail.com",
                oResourceBundle.getText("mailSubject", [sFirstName]),
                oResourceBundle.getText("mailBody")
            );
        }
    });
});
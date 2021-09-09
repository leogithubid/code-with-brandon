sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/library",
	"sap/ui/core/Locale",
	"sap/ui/core/LocaleData",
	"sap/ui/model/type/Currency"
], function(Controller,mobileLibrary,Locale,LocaleData,Currency) {
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
        },
        //another formatter function to format stock value field
		formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
			var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
			var oLocale = new Locale(sBrowserLocale);
			var oLocaleData = new LocaleData(oLocale);
			var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");

		}
    });
});
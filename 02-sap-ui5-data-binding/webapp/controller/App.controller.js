sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/library",
	"sap/ui/core/Locale",
	"sap/ui/core/LocaleData",
	"sap/ui/model/type/Currency",
	"sap/m/ObjectAttribute"
], function(Controller,mobileLibrary,Locale,LocaleData,Currency,ObjectAttribute) {
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

		},
        //once we select an item in the first list this function will be called
		onItemSelected: function(oEvent) {
            //get the selected item
			var oSelectedItem = oEvent.getSource();
            //get the selected item
			var oContext = oSelectedItem.getBindingContext("products");
            //get the path to the item selected
			var sPath = oContext.getPath();
            //get the panel to the form where we display more details
			var oProductDetailPanel = this.byId("productDetailsPanel");
            //link path to the details
			oProductDetailPanel.bindElement({ path: sPath, model: "products" });
		},
        //product list factory
		productListFactory : function(sId, oContext) {
			var oUIControl;

			// Decide based on the data which dependent to clone
			if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
				// The item is discontinued, so use a StandardListItem
				oUIControl = this.byId("productSimple").clone(sId);
			} else {
				// The item is available, so we will create an ObjectListItem
				oUIControl = this.byId("productExtended").clone(sId);

				// The item is temporarily out of stock, so we will add a status
				if (oContext.getProperty("UnitsInStock") < 1) {
					oUIControl.addAttribute(new ObjectAttribute({
						text : {
							path: "i18n>outOfStock"
						}
					}));
				}
			}

			return oUIControl;
		}
    });
});
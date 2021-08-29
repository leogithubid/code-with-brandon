sap.ui.define([
    "sap/ui/core/UIComponent", //load UI Component
    "sap/ui/model/json/JSONModel", //load JSON
    "sap/ui/model/resource/ResourceModel" //for i18n
], function (UIComponent, JSONModel, ResourceModel) { //use these in the contstructor
    'use strict';
    //return the UIComponent to ComponentContainer in the index.js
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        //metadata
        metadata: {
            //root View details
            "rootView": {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },
        //init
        init: function () {
            //instantiate paretn
            UIComponent.prototype.init.apply(this, arguments);

            //set JSON Model - copied from App controller from the previous steps
            //create oData variable to fill some initial values
            // set data model on view - the view reference is removed - this.getView()
            var oData = {
                recipient: {
                    name: "Component"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            //set i18n Model - copied from App controller
            //step 8 - loading Resource model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n" //give path to i18n file
            });
            this.setModel(i18nModel, "i18n"); //give it a name - i18n so that we can call it later with this name
        }
    });
});
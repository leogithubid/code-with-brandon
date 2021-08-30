sap.ui.define(
    [
        "sap/ui/core/UIComponent", //load UI Component
        "sap/ui/model/json/JSONModel", //load JSON, Resource model is moved to manifest.json
    ],
    function (UIComponent, JSONModel) { //use these in the constructor
        "use strict";
        //return the UIComponent to ComponentContainer in the index.js
        return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
            //metadata
            metadata: {
                //root View is moved to manifest.json
                manifest: "json",
            },
            //initialize
            init: function () {
                //instantiate parent
                UIComponent.prototype.init.apply(this, arguments);

                //set JSON Model - copied from App controller from the previous steps
                //create oData variable to fill some initial values
                var oData = {
                    recipient: {
                        name: "Component",
                    },
                };
                // set data model on view - the view reference is removed - this.getView()
                var oModel = new JSONModel(oData);
                this.setModel(oModel);
            },
        });
    }
);

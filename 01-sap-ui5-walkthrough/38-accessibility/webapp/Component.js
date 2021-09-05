sap.ui.define(
    /* 
    The dialog is now opened by the component 
    We have added code to initialize router
    */
    [
        "sap/ui/core/UIComponent", //load UI Component
        "sap/ui/model/json/JSONModel", //load JSON, Resource model is moved to manifest.json
        "./controller/HelloDialog",//load the newly created HelloDialog.js from controller folder
        "sap/ui/Device" //to make it adapt to the device
    ],
    function (UIComponent, JSONModel, HelloDialog, Device) { //use these in the constructor
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

                // set device model - after this go Detail.view.xml
			    var oDeviceModel = new JSONModel(Device);
			    oDeviceModel.setDefaultBindingMode("OneWay");
			    this.setModel(oDeviceModel, "device");

                //HelloDialog has 3 methods-constructor,exit,open
                //First call constructor here to instantiate onInit
                //it requires a view
                console.log(this.getRootControl());
                this._helloDialog = new HelloDialog(this.getRootControl());

                //initialise Router
                this.getRouter().initialize();
            },
            //content density
            getContentDensityClass : function () {
                if (!this._sContentDensityClass) {
                    if (!Device.support.touch) {
                        this._sContentDensityClass = "sapUiSizeCompact";
                    } else {
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }
                }
                return this._sContentDensityClass;
            },
            //now call exit
            exit : function(){
                this._helloDialog.destroy();
            },
            //then call open
            openHelloDialog : function(){
                this._helloDialog.open();
            }
        });
    }
);

/* Step 5 - create controller with a scaffolding template 
   Step 6 - Modules - resources are called modules in UI5. So we use a Message Toast
                      module and then raise a toast replacing the alert
   Step 7 - Load JSON model and then add data to it in the init event
*/
sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast",    //step 6 - load module and use it in the constructor argument
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel" //load Resource Model
], function(Controller,MessageToast,JSONModel,ResourceModel) {
    'use strict';
    //Step 5 - controller.extend and give the path to the controller
    Controller.extend("sap.ui.demo.walkthrough.controller.App",{
    onInit:function(){
        //create oData variable to fill some initial values
        // set data model on view
          var oData = {
            recipient : {
               name : "Smith"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel); 

         //step 8 - loading Resource model
         var i18nModel = new ResourceModel({
             bundleName : "sap.ui.demo.walkthrough.i18n.i18n" //give path to i18n file
         });
         this.getView().setModel(i18nModel,"i18n");//give it a name - i18n so that we can call it later with this name
      },
    //Step 5 - then create the press event handler function to say hello
    onShowHello:function(){
        //alert("Hello I am controller, how are you? ");

        //Step 8 - get the i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        //get JSON Model data
        var sName = this.getView().getModel().getProperty("/recipient/name");
        //concatenate and create message
        var oMessage = oBundle.getText("helloMsg",sName);

        //Step 6 - the above alert is replaced with a message toast
        MessageToast.show(oMessage);
    }
    });
});
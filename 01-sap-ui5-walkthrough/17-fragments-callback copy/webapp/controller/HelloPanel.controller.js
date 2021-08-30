/* This is the controller of Hello Panel View. We have some interesting things going on here
   We have the function ShowHello linked to press event of Hello Button
   Then we have openDialog linked to press event of Dialog Button, this will create
   a Fragment called HelloDialog.fragment , interesting isn't it? 
   Now we are adding a close button to the fragment - let's see
    */
sap.ui.define([
    "sap/ui/core/mvc/Controller",//load controller 
    "sap/m/MessageToast"        ,//lad module and use it in the constructor argument
    "sap/ui/core/Fragment"       //load Fragment
], function (Controller, MessageToast,Fragment) {
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
        },
        //This function is for the fragment. 
        onOpenDialog:function(){
            //first get the View reference
            var oView = this.getView();

            //instantiate fragment if not already done
            if(!this.byId("helloDialog")){
                //load the fragment
                Fragment.load({
                    id : oView.getId(), //get the id of the view
                    name : "sap.ui.demo.walkthrough.view.HelloDialog", //give the path to the Fragment
                    controller : this //just say that the controller of this fragment
                    //is the controller of the view itself ie, this one
                }).then(function(oDialog){
                    //link the fragment to the view as dependent
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            }else{
                //if the dialog fragment exists then just open 
                this.byId("helloDialog").open();
            };
            
        },
        //create a new function that will close the popup Fragment window 
        //which was opened by the function above openDialog
        onCloseDialog : function(){
            this.byId("helloDialog").close();
        }

    });
});
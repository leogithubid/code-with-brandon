/* Step 5 - create controller with a scaffolding template 
   Step 6 - Modules - resources are called modules in UI5. So we use a Message Toast
                      module and then raise a toast replacing the alert
*/
sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast"    //step 6 - load module and use it in the constructor argument
], function(Controller,MessageToast) {
    'use strict';
    //Step 5 - controller.extend and give the path to the controller
    Controller.extend("sap.ui.demo.walkthrough.controller.App",{
    //Step 5 - then create the press event handler function to say hello
    onShowHello:function(){
        //alert("Hello I am controller, how are you? ");
        //Step 6 - the above alert is replaced with a message toast
        MessageToast.show("Let's raise a toast for UI5");
    }
    });
});
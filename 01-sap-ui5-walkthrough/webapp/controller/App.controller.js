/* Step 5 - create controller with a scaffolding template */
sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    //Step 5 - controller.extend and give the path to the controller
    Controller.extend("sap.ui.demo.walkthrough.controller.App",{
    //Step 5 - then create the press event handler function to say hello
    onShowHello:function(){
        alert("Hello I am controller, how are you? ");
    }
    });
});
/* 
Note : We do not pass a controller as third parameter to function Fragment.load 
but a local helper object oFragmentController which included the needed 
event handler function onCloseDialog for the fragment.
The onCloseDialog event handler is simply moved from the HelloPanel controller to 
the reuse object.
We also add an exit function, just like we did in the component, that will be called 
automatically when the object is being destroyed. To free up all allocated memory 
in the helper object, we delete the property that holds the reference to the view. 
The view itself will be destroyed by the component, so we don't need to take care for that.
*/
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function(ManagedObject,Fragment,syncStyleClass) {
    'use strict';
    //Extend return the Managed Object 
    //The implementation of the HelloDialog reuse object extends an 
    //sap.ui.base.ManagedObject object to inherit some of the core functionality of SAPUI5.
    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog",{
        //constructor
        constructor : function(oView){ //Whenever HelloDialog is instantiated we have to
            //pass the view reference. It will be stored in the private variable
            //_oView
            this._oView = oView;
        },
        //exit
        exit:function(){ //delete the private view reference
            delete this._oView;
        },
        //open
        //Our open method is refactored from the HelloPanel controller and instantiates 
        //our dialog fragment as in the previous steps.
        open:function(oView){
            //The open method now contains our dialog instantiation. The first time the open method 
            //is called, the dialog is instantiated. The oView argument of this method is used to 
            //connect the current view to the dialog. We will call the open method of this object 
            //later in the controller.
            var oView = this._oView;

            //instantiate fragment if not already done
            if(!oView.byId("helloDialog")){
                // we are creating a controller for the fragment
                var oFragmentController = {
                    //that contains a method to close the fragment dialog
                    onCloseDialog:function(){
                        oView.byId("helloDialog").close();
                    }
                };
                //load the fragment
                Fragment.load({
                    id : oView.getId(), //get the id of the view
                    name : "sap.ui.demo.walkthrough.view.HelloDialog", //give the path to the Fragment
                    controller : oFragmentController 
                }).then(function(oDialog){
                    //link the fragment to the view as dependent
                    oView.addDependent(oDialog);
                // forward compact/cozy style into dialog
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    oDialog.open();
                });
            }else{
                //if the dialog fragment exists then just open 
                oView.byId("helloDialog").open();
            };

        }
    });
});
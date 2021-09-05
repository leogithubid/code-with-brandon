/* 
    This is a custom control. If we think SAP's standard controls are not enough
    for our requirements, we can create our own controls and use them with
    the added functionalities
    This control will be a combination of rating indicaotr, label and button
    We will call this custom control in Detail View,so let's jump there
*/
sap.ui.define([
"sap/ui/core/Control",
"sap/m/RatingIndicator",//rating indicator
"sap/m/Label",          //label
"sap/m/Button"          //button
], function(Control,RatingIndicator,Label,Button) {
    'use strict';
    return Control.extend("sap.ui.demo.walkthrough.control.ProductRating",{
        //meta data of the control
        //it has 3 sections - properties, aggregations, events
        metadata:{
            //our control has a property called value
            properties:{
                value : {type : "float", defaultValue : 0}
            },
            //it has 3 aggregations - rating, label, button
            aggregations:{
                _rating : {type : "sap.m.RatingIndicator",multiple : false, visibility : "hidden"},
                _label: { type : "sap.m.Label", multiple : false, visibility: "hidden" },
                _button:{type : "sap.m.Button", multiple : false, visibility : "hidden"}
            },
            //it has one event - change, look at the parameter - value
            events:{
                change : {
                    parameters : {
                        value : { type : "int"}
                    }
                }
            }
        },
        //initialise the control - it has 3 sections - rating, label, button
        init:function(){
            //rating
            this.setAggregation("_rating", new RatingIndicator({
                value : this.getValue(),//where's this defined? 
                iconSize : "2rem",
                visualMode : "Half",
                liveChange : this._onRate.bind(this)
            }));
            //label
            this.setAggregation("_label", new Label({
                text : "{i18n>productRatingLabelInitial}"
            })).addStyleClass("sapUiSmallMargin");
            //button
            this.setAggregation("_button", new Button({
                text : "{i18n>productRatingButton}",
                press : this._onSubmit.bind(this)
            })).addStyleClass("sapUiTinyMarginTopBottom");
        },
        //set value
        setValue : function(fValue){
            this.setProperty("value",fValue),true;
            this.getAggregation("_rating").setValue(fValue);
        },
        //reset 
        reset : function(){
            var oResourceBundle  = this.getModel("i18n").getResourceBundle();
            this.setValue(0);
            this.getAggregation("_label").setDesign("Standard");
            this.getAggregation("_rating").setEnabled(true);
            this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
            this.getAggregation("_button").setEnabled(true);
        },
        //onRate
        _onRate : function(oEvent){
            var oResourceBundle = this.getModel("i18n").getResourceBundle();
            var fValue = oEvent.getParameter("value"); 
            this.setProperty("value",fValue,true);
            this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelIndicator",[fValue,oEvent.getSource().getMaxValue()]));
            this.getAggregation("_label").setDesign("Bold");
        },
        //onSubmit
        _onSubmit : function(oEvent){
            var oResourceBundle = this.getModel("i18n").getResourceBundle();
            this.getAggregation("_rating").setEnabled(false);
            this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
            this.getAggregation("_button").setEnabled(false);
            this.fireEvent("change",{
                value : this.getValue()
            });
        },
        //renderer
        renderer:function(oRm,oControl){
            oRm.openStart("div",oControl);
            oRm.class("myAppDemoWTProductRating");
            oRm.openEnd();
            oRm.renderControl(oControl.getAggregation("_rating"));
            oRm.renderControl(oControl.getAggregation("_label"));
            oRm.renderControl(oControl.getAggregation("_button"));
            oRm.close("div");
        }
    });
});
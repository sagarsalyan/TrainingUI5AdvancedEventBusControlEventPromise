sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
], function (Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("app.UI5AdvancedTraining.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf app.UI5AdvancedTraining.view.Master
		 */
		onInit: function () {
			var oEventBus = sap.ui.getCore().getEventBus();
			// registering event bus
			oEventBus.subscribe("NotifyChannel", "showMessageBox", this.showMessageBox.bind(this), this);
			oEventBus.subscribe("NotifyChannel", "showMessageToast", this.showMessageToast.bind(this), this);
		},
		showMessageBox: function (sChannel, sEvent, oData) {
			MessageToast.show(oData.message + ":" + oData.empData.name);
		},
		showMessageToast: function (sChannel, sEvent, oData) {
			MessageToast.show(oData.message + ":" + oData.empData.name);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf app.UI5AdvancedTraining.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf app.UI5AdvancedTraining.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf app.UI5AdvancedTraining.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});
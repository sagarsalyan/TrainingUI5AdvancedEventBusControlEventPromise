sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/base/util/deepClone"
], function (Controller,MessageBox,deepClone) {
	"use strict";

	return Controller.extend("app.UI5AdvancedTraining.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf app.UI5AdvancedTraining.view.Detail
		 */
		onInit: function () {

		},
		onSubmit: function () {
			var empModel = this.getView().getModel("empModel");
			var oEventBus = sap.ui.getCore().getEventBus();
			var oMessage = {
				empData: {},
				message: "Data saved"
			};
			var empData = deepClone(empModel.getProperty("/tempData"));
			empData.empId = empModel.getProperty("/results").length + 1;
			empModel.getProperty("/results").push(empData);
			empModel.refresh();
			oMessage.empData = empData;

			//firing event bus
			oEventBus.publish("NotifyChannel", "showMessageBox", oMessage);

		},
		onPromise:function(oEvent){
			var oPromise = new Promise(function(resolve,reject){
				var x = 0;
				setTimeout(function(){
					if(x === 0){
						reject("Some error")
					}else{
						resolve("Data saved")
					}
				}, 1000)
			});
			oPromise.then(
				function(oSuccessData){
					MessageBox.success(oSuccessData);
				},
				function(oErrorData){
					MessageBox.error(oErrorData);
				}
			);

		},
		onPromiseChain:function(oEvent){
				var oPromise = new Promise(function(resolve,reject){
					var x=2
					setTimeout(function(){
						resolve(x*2);
					},1000)
				});
				
				oPromise.then(function(oData){
					alert(oData);
					return oData;
				}).then(function(oData){
					oData = oData * 3;
					alert(oData);
					return oData;
				}).then(function(oData){
					oData = oData * 4;
					alert(oData);
				})
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf app.UI5AdvancedTraining.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf app.UI5AdvancedTraining.view.Detail
		 */
		onAfterRendering: function () {
			var inputName = this.getView().byId("name");
			// way 1
			inputName.attachBrowserEvent("click", function (e) {
				//code goes here
				console.log(this.getValue());
			});

			// way 2
			// inputName.addEventDelegate({
			// 	onclick: function(e) {
			// 		//code goes here
			// 		console.log(e.srcControl.getValue());
			// 	}.bind(this),
			// 	onkeydown: function(e) {
			// 		// e.preventDefault();
			// 	}.bind(this),
			// });
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf app.UI5AdvancedTraining.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createEmployeeModel: function () {
			var empData = {
				tempData: {
					empId: null,
					name: "",
					manager: "",
					department: "",
					address: ""
				},
				results: [{
					empId: 1,
					name: "Sagar",
					manager: "Raghavendra",
					department: "Product",
					address: "Kasaragod, Kerala"
				}, {
					empId: 2,
					name: "Sunil",
					manager: "Rahul",
					department: "Product",
					address: "Mangaluru, Karnataka"
				}]
			};
			var oModel = new JSONModel(empData);
			return oModel;
		},

	};
});
/*global QUnit*/

sap.ui.define([
	"app/miningapp_4521/controller/MiningDetailsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MiningDetailsView Controller");

	QUnit.test("I should test the MiningDetailsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

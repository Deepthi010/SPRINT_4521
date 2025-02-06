sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/Fragment"
], (Controller,Filter,FilterOperator,Fragment) => {
    "use strict";

    return Controller.extend("app.miningapp4521.controller.MiningDetailsView", {
        onInit() {
        },
        
		//not referenced from the view, used just for modularity
		// _privateFunction:function(){
			
		// },
		
		onSearch:function(oEvent){
			
			
			// var searchString = oEvent.getParameter("query");
			// //OR
			// // var IdSearch = this.getView().byId("idSearch").getValue();
			// //filter by name		operand    operator				operand
			// var filter1 = new Filter("name",FilterOperator.EQ,searchString);
		
			// //var aFilter = [filter1];
			// //filter by id     
			// //EQ searchs for exact string  
			// //contains, checks whether the actual string matches the searchString
			//  var filter2 = new Filter("id",FilterOperator.EQ,searchString);
			// var aFilter = [filter2];
			// var aFilter = [filter1,filter2];
				// if (filter1 || filter2){
				// 	if(filter1){
				// 		var aFilter = [filter1];
				// 		var oList1 = this.getView().byId("idListItem");
				// 		//getBinding() for single item but getContextBinding() for all items
				// 		var bindingItems1 = oList1.getBinding("items");
				// 		bindingItems1.filter(aFilter);
				// 	}
				// 	if(filter2){
				// 		var	bFilter = [filter2];
				// 		var oList = this.getView().byId("idListItem");
				// 		//getBinding() for single item but getContextBinding() for all items
				// 		var bindingItems = oList.getBinding("items");
				// 		bindingItems.filter(bFilter);
				// 	}
				// }
				
			//getSource gives us the id directly
			//'oEvent' is pre built control events which is already 
			//reserved as oControlEvent here . we can name it anything in our code	
			
			var searchString = oEvent.getParameter("query") || oEvent.getParameter("newValue");
			//OR
			// var IdSearch = this.getView().byId("idSearch").getValue();
			//filter by name		operand    operator				operand
			//var filter1 = new Filter("name",FilterOperator.Contains,searchString);
			var filter1 = new Filter("MineralType",FilterOperator.Contains,searchString);
			//var aFilter = [filter1];
			//filter by id     
			//EQ searchs for exact string  
			//contains, checks whether the actual string matches the searchString
			// var filter2 = new Filter("id",FilterOperator.EQ,searchString);
			var filter2 = new Filter("LocationId",FilterOperator.Contains,searchString);
			 //two filters at a time
			var aFilter = [filter1,filter2];
		
			var mainFilter=new Filter({
				filters:aFilter,
				and:false
			});
			var oList = sap.ui.getCore().byId("idListItem");
			//getBinding() for all items but getContextBinding() for single item
			var bindingItems = oList.getBinding("items");
			bindingItems.filter(mainFilter);
            // bindingItems.filter(aFilter);
				
			},
			onSort:function(){
				//dynamically changing the from desc to asc on 1 click and desc to asc on next click
				//desc is not defined yet, descending is a var
				if(this.descending === "undefined"){
					this.descending = false;
				}
				//for the second click of button this.descending = true;
				var sorter = new sap.ui.model.Sorter("CostCenter",this.descending);
				var oList = sap.ui.getCore().byId("idListItem");
				var oBinding = oList.getBinding("items");
				oBinding.sort(sorter);
				this.descending = !this.descending;
			},

			//when list item is pressed it should go to next page 
			// onItemPress:function(oControlEvent){
			// 	var item = oControlEvent.getParameter("listItem");
			// 	//check item in the sources in debug mode 
			// 	//path for listItem
			// 	var spath = item.oBindingContexts.toolsModel.sPath;
			// 	// var spath = item.getBindingContext();
			// 	//make complete path
			// 	var mainPath = "toolsModel>" +spath;
			// 	//the 1st getParent() fetches the pages and next getParent() gets us masterpage 
			// 	//for detailpage or no page
			// 	// var oApp = this.getView().getParent().getParent();
			// 	var oApp = this.getAppObj();
			// 	var oView2 = oApp.getDetailPage("idDetail");
			// 	//bind it to main path making view2 know the path
			// 	oView2.bindElement(mainPath);
			// 	this.onPressToView2();
			// }
		
			// onItemPress:function(oControlEvent){
			// 	var item = oControlEvent.getParameter("listItem");
			// 	//check item in the sources in debug mode 
			// 	//path for listItem
			// 	var sPath = item.oBindingContexts.sPath;
			// 	//to select the particular item from master so we need index
			// 	let aItems= sPath.split("/");
			// 	let sIndex= aItems[aItems.length-1];
			// 	let oRouter = this.getOwnerComponent().getRouter();
			// 	//RouteDetail is router name and ind is pattern check in manifest
			// 	oRouter.navTo("RouteDetail",
			// 		{
			// 			id:sIndex
			// 		})

			// }

			onItemPress: function(oControlEvent) {
				let item = oControlEvent.getParameter("listItem");  // Get the selected list item
				let oBindingContext = item.getBindingContext();  // Get the binding context of the item
				let sLocationId = oBindingContext.getProperty("LocationId");
				// Get the index from the binding context
				// Extract the index from the path
				//let sPath = oBindingContext.getPath()
				//let sIndex = sPath.split("/").pop();  
			
				// Alternatively, if you want to 
				//work with the index of the item in the list (based on its position):
				//var aItems = oControlEvent.getSource().getItems();  // Get all items from the list
				//var index = aItems.indexOf(item);  // Find the index of the selected item
			
				let oRouter = this.getOwnerComponent().getRouter();
				// Pass the index as the parameter 'ind' in the navigation
				oRouter.navTo("RouteDetail", {
					id: sLocationId  // Pass the index here
				});
			},
			onAddDetails:function(){
				var oView = this.getView();

				// Check if the dialog fragment is already created
				if (!this.oDialog) {
					// Load the fragment asynchronously
					Fragment.load({
						// Path to the fragment XML file
						name: "app.miningapp4521.fragments.popUp",  
						controller: this
					}).then(function (oDialog) {
						// Add the dialog to the view
						this.oDialog = oDialog;
						oView.addDependent(this.oDialog);
	
						this.oDialog.setWidth("100%");  // Set width
            			this.oDialog.setHeight("500px");  // Set height
						// Open the dialog
						this.oDialog.open();
					}.bind(this));
				} else {
					// If the dialog is already created, just open it
					this.oDialog.open();
				}
			},
			onCloseDialog: function () {
				this.oDialog.close();
			},
			onSubmitData: function () {
				var oModel = this.getOwnerComponent().getModel(); 
			
				// Prepare the entity and payload
				var oInputLocationId = sap.ui.getCore().byId("LocationIdInput");
				var oInputDrillDate = sap.ui.getCore().byId("DrillDateInput");
				var oInputLocationDesc = sap.ui.getCore().byId("LocationDescInput");
				var oInputMiningResource = sap.ui.getCore().byId("MiningResourceAllocatedInput");
				var oInputTotalCost = sap.ui.getCore().byId("TotalCostInput");
				var oInputReportOfMinerals = sap.ui.getCore().byId("ReportOfPossibleMineralsInput");
				var oInputDrillCount = sap.ui.getCore().byId("DrillCountInput");
				var oInputMineralType = sap.ui.getCore().byId("MineralTypeInput");
				var oInputMaterialId = sap.ui.getCore().byId("MaterialIdInput");
				var oInputCostCenter = sap.ui.getCore().byId("CostCenterInput");
			
				var sLocationId = oInputLocationId.getValue();
				var sDrillDate = oInputDrillDate.getValue().toString();;
				var sLocationDesc = oInputLocationDesc.getValue();
				var sMiningResourceAllocated = oInputMiningResource.getValue();
				var sTotalCost = oInputTotalCost.getValue();
				var sReportOfPossibleMinerals = oInputReportOfMinerals.getValue();
				var sDrillCount = oInputDrillCount.getValue();
				var sMineralType = oInputMineralType.getValue();
				var sMaterialId = oInputMaterialId.getValue();
				var sCostCenter = oInputCostCenter.getValue();

				//var sDrillDate1 = sDrillDate.toString();
				//var sDrillDate = oInputDrillDate.getValue().toString();
				console.log(sDrillDate)
			
				var payload = {
					LocationId: sLocationId,
					DrillDate: sDrillDate
				// 	LocationDesc: sLocationDesc,
				// 	MiningResourceAllocated: sMiningResourceAllocated,
				// 	TotalCost:sTotalCost,
				// 	ReportOfPossibleMinerals: sReportOfPossibleMinerals,
				// 	DrillCount: sDrillCount,
				// 	MineralType: sMineralType,
				// 	MaterialId: sMaterialId,
				// 	CostCenter: sCostCenter,
				};
			
				// Prepare the entity and make the OData service call
				var entity = "/waSet"; // Replace with the actual entity name in your OData service
			
				// OData POST request
				oModel.create(entity, payload, {
					success: function (odata, response) {
						if (response.statusCode === "201") {
							sap.m.MessageBox.show("Data posted successfully.");
			
							// Reset the input fields after successful posting
							oInputLocationId.setValue("");
							oInputDrillDate.setValue("");
							oInputLocationDesc.setValue("");
							oInputMiningResource.setValue("");
							oInputTotalCost.setValue("");
							oInputReportOfMinerals.setValue("");
							oInputDrillCount.setValue("");
							oInputMineralType.setValue("");
							oInputMaterialId.setValue("");
							oInputCostCenter.setValue("");
			
							// Close the dialog after submission
							this._oDialog.close();
						}
					},
					error: function (error) {
						console.log(error);
						sap.m.MessageToast.show("Failed to post data.");
					}
				});
			}
			
		

    });
});
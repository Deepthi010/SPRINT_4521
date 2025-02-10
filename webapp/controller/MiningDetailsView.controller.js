sap.ui.define([
    "sap/ui/core/mvc/Controller",
	//"sap/ui/model/Filter",
	//"sap/ui/model/FilterOperator",
	"sap/ui/core/Fragment"
], (Controller,Fragment) => {
    "use strict";

    return Controller.extend("app.miningapp4521.controller.MiningDetailsView", {
        onInit() {
        },
        
		//not referenced from the view, used just for modularity
		// _privateFunction:function(){
			
		// },
		
		// onSearch:function(oEvent){
			
			
		// 	// let searchString = oEvent.getParameter("query");
		// 	// //OR
		// 	// // let IdSearch = this.getView().byId("idSearch").getValue();
		// 	// //filter by name		operand    operator				operand
		// 	// let filter1 = new Filter("name",FilterOperator.EQ,searchString);
		
		// 	// //let aFilter = [filter1];
		// 	// //filter by id     
		// 	// //EQ searchs for exact string  
		// 	// //contains, checks whether the actual string matches the searchString
		// 	//  let filter2 = new Filter("id",FilterOperator.EQ,searchString);
		// 	// let aFilter = [filter2];
		// 	// let aFilter = [filter1,filter2];
		// 		// if (filter1 || filter2){
		// 		// 	if(filter1){
		// 		// 		let aFilter = [filter1];
		// 		// 		let oList1 = this.getView().byId("idListItem");
		// 		// 		//getBinding() for single item but getContextBinding() for all items
		// 		// 		let bindingItems1 = oList1.getBinding("items");
		// 		// 		bindingItems1.filter(aFilter);
		// 		// 	}
		// 		// 	if(filter2){
		// 		// 		let	bFilter = [filter2];
		// 		// 		let oList = this.getView().byId("idListItem");
		// 		// 		//getBinding() for single item but getContextBinding() for all items
		// 		// 		let bindingItems = oList.getBinding("items");
		// 		// 		bindingItems.filter(bFilter);
		// 		// 	}
		// 		// }
				
		// 	//getSource gives us the id directly
		// 	//'oEvent' is pre built control events which is already 
		// 	//reserved as oControlEvent here . we can name it anything in our code	
			
		// 	let searchString = oEvent.getParameter("query") || oEvent.getParameter("newValue");
		// 	//OR
		// 	// let IdSearch = this.getView().byId("idSearch").getValue();
		// 	//filter by name		operand    operator				operand
		// 	//let filter1 = new Filter("name",FilterOperator.Contains,searchString);
		// 	let filter1 = new Filter("MineralType",FilterOperator.Contains,searchString);
		// 	//let aFilter = [filter1];
		// 	//filter by id     
		// 	//EQ searchs for exact string  
		// 	//contains, checks whether the actual string matches the searchString
		// 	// let filter2 = new Filter("id",FilterOperator.EQ,searchString);
		// 	let filter2 = new Filter("LocationId",FilterOperator.Contains,searchString);
		// 	 //two filters at a time
		// 	 let aFilter = [filter1,filter2];
		
		// 	 let mainFilter=new Filter({
		// 		filters:aFilter,
		// 		and:false
		// 	});
		// 	let oList = sap.ui.getCore().byId("idListItem");
		// 	//getBinding() for all items but getContextBinding() for single item
		// 	let bindingItems = oList.getBinding("items");
		// 	bindingItems.filter(mainFilter);
        //     // bindingItems.filter(aFilter);
				
		// 	},
			// onSort:function(){
			// 	//dynamically changing the from desc to asc on 1 click and desc to asc on next click
			// 	//desc is not defined yet, descending is a let
			// 	if(this.descending === "undefined"){
			// 		this.descending = false;
			// 	}
			// 	//for the second click of button this.descending = true;
			// 	let sorter = new sap.ui.model.Sorter("CostCenter",this.descending);
			// 	let oList = sap.ui.getCore().byId("idListItem");
			// 	let oBinding = oList.getBinding("items");
			// 	oBinding.sort(sorter);
			// 	this.descending = !this.descending;
			// },

			//when list item is pressed it should go to next page 
			// onItemPress:function(oControlEvent){
			// 	let item = oControlEvent.getParameter("listItem");
			// 	//check item in the sources in debug mode 
			// 	//path for listItem
			// 	let spath = item.oBindingContexts.toolsModel.sPath;
			// 	// let spath = item.getBindingContext();
			// 	//make complete path
			// 	let mainPath = "toolsModel>" +spath;
			// 	//the 1st getParent() fetches the pages and next getParent() gets us masterpage 
			// 	//for detailpage or no page
			// 	// let oApp = this.getView().getParent().getParent();
			// 	let oApp = this.getAppObj();
			// 	let oView2 = oApp.getDetailPage("idDetail");
			// 	//bind it to main path making view2 know the path
			// 	oView2.bindElement(mainPath);
			// 	this.onPressToView2();
			// }
		
			// onItemPress:function(oControlEvent){
			// 	let item = oControlEvent.getParameter("listItem");
			// 	//check item in the sources in debug mode 
			// 	//path for listItem
			// 	let sPath = item.oBindingContexts.sPath;
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
				//let aItems = oControlEvent.getSource().getItems();  // Get all items from the list
				//let index = aItems.indexOf(item);  // Find the index of the selected item
			
				let oRouter = this.getOwnerComponent().getRouter();
				// Pass the index as the parameter 'ind' in the navigation
				oRouter.navTo("RouteDetail", {
					id: sLocationId  // Pass the index here
				});
			},
			onAddDetails:function(){
				let oView = this.getView();

				// Check if the dialog fragment is already created
				if (!this.oDialog) {
					// Load the fragment asynchronously
					Fragment.load({
						// Path to the fragment XML file
						name: "app.miningapp4521.fragments.popUp",  
						controller: this
					}).then( (oDialog)=> {
						// Add the dialog to the view
						this.oDialog = oDialog;
						oView.addDependent(this.oDialog);
	
						// this.oDialog.setWidth("100%");  // Set width
            			// this.oDialog.setHeight("500px");  // Set height
						// Open the dialog
						this.oDialog.open();
					});
				} else {
					// If the dialog is already created, just open it
					this.oDialog.open();
				}
			},
			onCloseDialog: function () {
				this.oDialog.close();
			},
			onSubmitData: function () {
				let oModel = this.getOwnerComponent().getModel(); 
			
				// Prepare the entity and payload
				let oInputLocationId = sap.ui.getCore().byId("LocationIdInput");
				let oInputDrillDate = sap.ui.getCore().byId("DrillDateInput");
				let oInputLocationDesc = sap.ui.getCore().byId("LocationDescInput");
				let oInputMiningResource = sap.ui.getCore().byId("MiningResourceAllocatedInput");
				let oInputTotalCost = sap.ui.getCore().byId("TotalCostInput");
				let oInputReportOfMinerals = sap.ui.getCore().byId("ReportOfPossibleMineralsInput");
				let oInputDrillCount = sap.ui.getCore().byId("DrillCountInput");
				let oInputMineralType = sap.ui.getCore().byId("MineralTypeInput");
				let oInputMaterialId = sap.ui.getCore().byId("MaterialIdInput");
				let oInputCostCenter = sap.ui.getCore().byId("CostCenterInput");
			
				let sLocationId = oInputLocationId.getValue();
				let sDrillDate = oInputDrillDate.getValue().toString();
				let sLocationDesc = oInputLocationDesc.getValue();
				let sMiningResourceAllocated = oInputMiningResource.getValue();
				let sTotalCost = oInputTotalCost.getValue();
				let sReportOfPossibleMinerals = oInputReportOfMinerals.getValue();
				let sDrillCount = oInputDrillCount.getValue();
				let sMineralType = oInputMineralType.getValue();
				let sMaterialId = oInputMaterialId.getValue();
				let sCostCenter = oInputCostCenter.getValue();

				//let sDrillDate1 = sDrillDate.toString();
				//let sDrillDate = oInputDrillDate.getValue().toString();
				//console.log(sDrillDate)

				//let formattedDrillDate = sDrillDate + "T00:00:00";

				// Get the current time
				let currentTime = new Date().toTimeString().split(' ')[0]; // Format: "HH:MM:SS"

				// Format the date to include the current time component
				let formattedDrillDate = sDrillDate + "T" + currentTime;
			
				let payload = {
					LocationId: sLocationId,
					DrillDate: formattedDrillDate,
					LocationDesc: sLocationDesc,
					MiningResourceAllocated: sMiningResourceAllocated,
					TotalCost:sTotalCost,
					ReportOfPossibleMinerals: sReportOfPossibleMinerals,
					DrillCount: sDrillCount,
					MineralType: sMineralType,
					MaterialId: sMaterialId,
					CostCenter: sCostCenter,
				};
			
				// Prepare the entity and make the OData service call
				let entity = "/waSet"; // Replace with the actual entity name in your OData service
			
				// OData POST request
				oModel.create(entity, payload, {
					success: (odata, response)=> {
						if (response.statusCode === "201") {
							sap.m.MessageToast.show("Data posted successfully.");
			
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
							this.oDialog.close();
						}
					},
					error:(error)=> {
						try{
							console.log(error);
							sap.m.MessageToast.show("Failed to post data.");
						}catch(err){
							sap.m.MessageToast.alert("Something went wrong")
							console.log(err)
						}
					}
				});
			},
			onInput: function(oEvent) {
				let oInput = oEvent.getSource();
        	    let sValue = oEvent.getParameter("value");

            // Check for non-numeric characters
            if (/[^0-9]/.test(sValue)) {
                // Set the input value to an empty string if non-numeric characters are found
                oInput.setValue("");
				sap.m.MessageToast.show("Only numeric values are allowed");
                return;
            }

            // Limit the input to a maximum of 5 characters
            if (sValue.length > 5) {
                sap.m.MessageToast.show("Enter upto 5 digits");
            }
			else{
				oInput.setValue(sValue);
			}
        },
		onLiveChange:function(oEvent){
			let oInput = oEvent.getSource();
            let sValue = oEvent.getParameter("value");

            // Check for non-alphanumeric characters
            if (/[^a-zA-Z0-9]/.test(sValue)) {
                // Set the input value to an empty string if non-alphanumeric characters are found
                oInput.setValue("");
                sap.m.MessageToast.show("Only alphabets and numbers are allowed.");
                return;

            // Limit the input to a maximum of 10 characters
			    }    if (sValue.length > 10) {
                sap.m.MessageToast.show("Enter upto 10 alphanumeric")
                
            }
			if (sValue.trim() === "") {
				sap.m.MessageToast.show("This field is required.");
				return;
			}
			else{
				oInput.setValue(sValue);
			}
        },
		onInputCost:function(oEvent){
			let oInput = oEvent.getSource();
            let sValue = oEvent.getParameter("value");

            // Check for non-alphanumeric characters
            if (/[^0-9]/.test(sValue)) {
                // Set the input value to an empty string if no digits are found
                oInput.setValue("");
				sap.m.MessageToast.show("Only numeric values are allowed");
                return;
            }

            // Limit the input to a maximum of 8 characters
            if (sValue.length > 8) {
                sap.m.MessageToast.show("Enter upto 8 digits");
                
            }
			else{
				oInput.setValue(sValue);
			}
		
		 },
		 onCount:function(){
			let oInput = oEvent.getSource();
            let sValue = oEvent.getParameter("value");

            // Check for non-alphanumeric characters
            if (/[^0-9]/.test(sValue)) {
                // Set the input value to an empty string if no digits are found
                oInput.setValue("");
				sap.m.MessageToast.show("Only numeric values are allowed");
                return;
            }

            // Limit the input to a maximum of 8 characters
            if (sValue.length > 8) {
                sap.m.MessageToast.show("Enter upto 8 digits");
                
            }
			else{
				oInput.setValue(sValue);
			}
		}
		
    });
});
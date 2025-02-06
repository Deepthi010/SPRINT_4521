sap.ui.define([
    "sap/ui/core/mvc/Controller"
    //"sap/ui/core/Fragment"
], (Controller) => {
    "use strict";

    return Controller.extend("app.miningapp4521.controller.detailView", {
        onInit() {

            // var oModel = new sap.ui.model.json.JSONModel();
			// oModel.loadData("/model/mockData/supplier.json");
			// this.getView().setModel(oModel);

            let oRouter = this.getOwnerComponent().getRouter();
            //_onRouteMatched is a private function
            oRouter.attachRoutePatternMatched(this._onRouteMatched,this)
            
        },

        _onRouteMatched:function(oEvent){
            // let sIndex = oEvent.getParameter("arguments").ind
            // //to construct the absolute path to next page
            // // let sPath = "toolsModel>/toolsData/"+sIndex
            // let sPath = "waSet/"+sIndex
            // //getting the view and making it know about the sPath
            // let oDetailView=this.getView();
            // oDetailView.bindElement(sPath);

            // Retrieve the 'LocationId' passed as a parameter
            let sLocationId = oEvent.getParameter("arguments").id;
            
            // Construct the OData path using the 'LocationId'
            let sPath = "/waSet('" + sLocationId + "')";  // Assuming 'LocationId' is the key of the entity
            
            // Bind the detail view to the specific item based on sPath
            let oDetailView = this.getView();
            oDetailView.bindElement(sPath);

            
            // oModel.read(entity,{
            //     success:function(odata, response){
            //  //if data is present data is displayed it no data is displayed
            // // Example : if "/BusinessPartnerSet('" + key + "')/ToSalesOrder" if api is wrong
            // //i.e instead of ToSalesOrders it is given ToSalesOrder it will display error.message
            //         if(response.statusCode==="200" || response.statusText==="OK"){
            //         // console.log(odata)
            //         // console.log(response)
            //         var oJModel=new JSONModel(odata)
            //         that.getView().setModel(oJModel,"toolsModel")
            //         }
            //     },
            //     error:function(error){
            //         if(error.statusCode === "404" || error.statusText==="Not Found"){
            //            MessageBox.show(error.message)
            //         }
            //     }
            // }) 
        }
        // ,
        // f4Help:function(oEvent){
		// 	//this.sId is made global 
		// 	//getSource triggers the exact point from where event is triggered 
		// 	this.sId = oEvent.getSource().getId();
		// 	var oView = this.getView();
			
		// 	var oModel = oView.getModel();
		// 	//Deep Copy
		// 	var oData = JSON.parse(JSON.stringify(oModel.getProperty("/supplierTab")));
			
		// 	//Create a temporary model for a fragment
		// 	  var oTempModel = new sap.ui.model.json.JSONModel({
		// 	  	supplierTab:oData
		// 	  });
			  
		// 	//making dialog global i.e this.dailog is a property for whole controller
		// 	//framework knows about this so it does not take the loading it again and again
		// 	if(!this.dialog){
		// 		// if dialog is not there create it
		// 		this.dialog = Fragment.load({
		// 			name:"app.splitapp4521.fragments.popUp",
		// 			controller:this
		// 			//.then - wait for the fragment to load, once it loades do something
		// 		}).then(function(oDialog){
		// 			this.dialog = oDialog;
		// 			oView.addDependent(this.dialog);
		// 			this.dialog.setModel(oTempModel, "fragmentModel");
		// 			this.dialog.open();
		// 		}.bind(this));
		// 	}else{
		// 		// else open it
		// 		this.dialog.open(); 
		// 	}
		// 
        //},
        
		//  //use the particular item of dialog
		// onConfirm:function(oEvent){
		// 	var oItem=oEvent.getParameter("selectedItem");
		// 	var sItem=oItem.mProperties.title;
		// 	// var sItem=oItem.getProperties("title");
        //     // var oInpt = this.getView().byId(this.sId);
		// 	var oInpt = sap.ui.getCore().byId(this.sId);
		// 	oInpt.setValue(sItem);

		// }

    });
});
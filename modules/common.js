//Type your code here
var APP_KEY = "bc54e14a3e1473b5c0786ff604eca0de";
var APP_SECRET = "fcfb91b398b14d862a51d32fff13bf89";
var SERVICE_URL = "https://100008191.auth.konycloud.com/appconfig";

var client;
var integrationObj;
var g_operationName = "";
var g_productListResponse;
var g_isPageNoChanged = false;
var g_response;
var homeModel = require("frmHomeModel");
var homeController = require("frmHomeController");
var g_appData;


//Initialize Application
function initializeSDK(){
  alert("initiate");
 try{
  showLoadingScreen();
  client = new kony.sdk();
  client.init(APP_KEY, APP_SECRET, SERVICE_URL, function(response) {
    hideLoadingScreen();
    getCategoriesList("cat00000");
   }, function(error) {
     alert("client SDK is not initialized. Please exit application and try again.");
   });
 }catch(e){
	alert("some exception occured : "+e.message); 
 }
}

//Consume API
function sendServerRequest(inputParamsObj, operationName){
 try{
   if(!g_isPageNoChanged){
     showLoadingScreen(); 
   }
   g_operationName = operationName;
   integrationObj = client.getIntegrationService("BestBuyTestService");
   headers = {};	
   integrationObj.invokeOperation(operationName, headers, inputParamsObj, opSuccess, opFailure);
 }catch(e){
   alert("some exception has occured : "+e.message);
 }  
}

function opSuccess(response){
//alert("Integration Service Response is :" + JSON.stringify(response));
if(!g_isPageNoChanged){
  hideLoadingScreen();
}
if (response.httpStatusCode == 200){
  switch (g_operationName){
     case "obtainCategories":{
       homeModel.processCategoryList(response);	
       g_appData = homeModel.getAll();
       homeController.updateUI();
       break;
     }
     case "getProducts":{
       g_productListResponse = response;
       processProductListResponse(response);
       break;
     }  
     case "findStores":{
       processStoresResponse(response);
       break;
     }  
     case "getProductDetails":{
       processProductDetailsResponse(response);
       break;
     } 
     case "getReviews":{
       processReviewsResponse(response);
       break;
     }  
     case "searchProducts":{
       processSearchResponse(response);
       break;
   	} 
  }
 }
}

function opFailure(error){
 if(!g_isPageNoChanged){
   hideLoadingScreen();
 }else{
   g_isPageNoChanged = false;
 }
 //for debugging purpose
 //alert("Integration Service failure Response is :" + JSON.stringify(error));
 /*if (kony.application.getCurrentForm() !== frmHome)
 	handleBackButton();*/
 switch(error.opstatus){
   case 1011: 
     alert("Device has no WIFI or mobile connectivity");
     break;
   case 1012:
     alert("Request Failed");
     break;
   case 1013:
     alert("Middleware returned invalid JSON string");
     break;
   case 1014:
     alert("Request timed out");
     break;
   case 1015:
     alert("Cannot find host");
     break;
   case 1016:
     alert("Cannot connect to host");
     break;
   default:{
     if (error.errmsg)
     alert("Some error occured :\n"+error.errmsg);
     else
       alert("Some error occured");
     break;
   }    
 }
}


//API Calls
function getCategoriesList(categoryId){
 var operationName = "obtainCategories";
 var inputParamsObj = {"catId":categoryId};
 sendServerRequest(inputParamsObj, operationName);
}


//API Call animation
function showLoadingScreen(){
 kony.application.showLoadingScreen(null, "loading", 
                                    constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {  
 });
}

function hideLoadingScreen(){
 kony.application.dismissLoadingScreen();
}
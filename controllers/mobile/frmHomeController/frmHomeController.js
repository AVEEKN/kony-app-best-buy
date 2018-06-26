define(function (){ 
//Type your controller code here
  var _controller;
  
  function _hideBackButton(){
    _controller.view.appMainHeader.flxBackBtnIcon.isVisible =false;
  }
  
  function _updateUI() {
   var resObj={};
  	var arrCategories=[];
  	for(var i=0;i<g_appData.length;i++){
    
    	resObj={
      
      		"lblList":{"text":g_appData[i].name}
      
    	};
    resObj.catId = g_appData[i].id;
    arrCategories.push(resObj);
  	}
  	
  	_controller.view.flxScrollCat.segCategoryList.removeAll();
    _controller.view.flxScrollCat.segCategoryList.addAll(arrCategories);
    _showSegCategory();
  }

  function _loadData() {
    _controller = this;
    _hideSegCategory();
    _hideBackButton();
    initializeSDK();
  }
  
  function _hideSegCategory(){
    _controller.view.flxScrollCat.isVisible = false;
  }
  
  function _showSegCategory(){
    _controller.view.flxScrollCat.isVisible = true;
  }

  function _bind() {
  }
  
  return{
    loadData : _loadData,
    updateUI : _updateUI
  };
  
});
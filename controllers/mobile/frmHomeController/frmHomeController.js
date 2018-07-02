define(function (){ 
//Type your controller code here
  var _controller;
  var formID = 'frmHome';
  var selectedCat;
  
  /* Set Visibility of Back Button */
  function _hideBackButton(){
    _controller.view.appMainHeader.flxBackBtnIcon.isVisible = false;
  }
  
  function _showBackButton(){
    _controller.view.appMainHeader.flxBackBtnIcon.isVisible = true;
  }
  
  function _setBackButtonVsibility(){
    if(g_applicationCache.length <= 1){
      _hideBackButton();
    }
    else{
      _showBackButton();
    }
  }
  
  /* Category Segment Animation & visibility */
  function _segCategoryAnimation(){
    var curForm = kony.application.getCurrentForm();
    var animConfig = onRowDisplayFunction();
    curForm.flxHomeContainer.flxScrollCat.segCategoryList.setAnimations({visible: animConfig});
  }
  
    function _hideSegCategory(){
    _controller.view.flxScrollCat.isVisible = false;
  }
  
  function _showSegCategory(){
    _controller.view.flxScrollCat.isVisible = true;
  }
  
  
  /* Set data to Category Segment */
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
  	
  	_controller.view.flxHomeContainer.flxScrollCat.segCategoryList.removeAll();
    _controller.view.flxHomeContainer.flxScrollCat.segCategoryList.addAll(arrCategories);
    
    _setBackButtonVsibility();
    
    if (g_isBackButtonClicked){
      g_applicationCache.splice(g_applicationCache.length - 1, 1);
      g_isBackButtonClicked = false;
    }else{
      storeInCache(formID, selectedCat, g_appData);
    }
    
    _setBackButtonVsibility();
    
    _updateBreadCrum();
    _showSegCategory();
  }
  
  /* Update Bread Crum */
  function _updateBreadCrum(){
    var breadCrumText = 'Home';
    
    for (var i = 0; i < g_applicationCache.length; i++)
      {
        if (g_applicationCache[i].category){
          breadCrumText = breadCrumText + " -> " + g_applicationCache[i].category;
        }
      }
    _controller.view.flxHomeContainer.lblBreadCrumb.text = breadCrumText;
  }
  
  /**
  *On Back Button Click
  **/
  function _onBackButtonClick(){
    g_isBackButtonClicked = true;
    retrieveDataFromCache();
  }
  
  /** 
  *On Row Click of Category Segment 
  **/
  function _segmentRowClick(){
    var selectedItem = _controller.view.flxHomeContainer.flxScrollCat.segCategoryList.selectedRowItems;
    selectedCat = selectedItem[0].lblList.text;
    getCategoriesList(selectedItem[0].catId);
    //_updateBreadCrum();
  }

  /* Home Screen On Load*/
  function _loadData() {
    _controller = this;
    _setBackButtonVsibility();
    _hideSegCategory();
    initializeSDK();
  }
  
  /* Hamburger menu functionality */
  function _loadHamBurgerMenu(){
    var curForm = kony.application.getCurrentForm();
    toggleMenu(curForm.flxMenuContainer.HamBurgerMenu, curForm.flxHomeContainer);
  }

  function _bind() {
    
  }
  
  return{
    loadData : _loadData,
    updateUI : _updateUI,
    loadHamBurgerMenu : _loadHamBurgerMenu,
    segCategoryAnimation : _segCategoryAnimation,
    segmentRowClick : _segmentRowClick,
    onBackButtonClick : _onBackButtonClick
  };
  
});
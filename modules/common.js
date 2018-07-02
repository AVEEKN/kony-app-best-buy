//Type your code here

var g_isHomeLandingScreen = false;
var g_isMenuOpened = false;
var g_applicationCache = [];
var g_isBackButtonClicked = false;

/**
*opens/closes menu. 
*getting called on menu click
**/
function toggleMenu(param, currentForm){
  if(!g_isMenuOpened){
    openMenu(param, currentForm);
  }else{
    closeMenu(param, currentForm);
  }
}

function setMenuOpened(value){
  g_isMenuOpened = value;
}

/**
*Store data in cache 
**/
  function storeInCache(pageID, category, data){
    var cacheObj = {};
    cacheObj.pageID = pageID;
    cacheObj.category = category;
    cacheObj.data = data;
    
    g_applicationCache.push(cacheObj);
  }

/**
*Retrieve data from cache 
**/
  function retrieveDataFromCache(){
    if (g_applicationCache[g_applicationCache.length - 2].pageID == "frmHome"){
      g_appData = g_applicationCache[g_applicationCache.length - 2].data;
      homeController.updateUI();
    }
  }

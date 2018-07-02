define(function () {
   
  var staticData = [];
   
  function processCategoryList(response) {
    staticData = [];
    var resObj={};
    if (response.categories.length !== 0){
      if (response.categories.length >= 3){
        for(var i=0;i<response.categories.length;i++){
          resObj={
          "name":response.categories[i].catName
          };
          resObj.id = response.categories[i].catId;
          staticData.push(resObj);
          }
      }else{
        alert ("Product List needs to be displayed. Screen Development is in progress.");
      }
   	}
  }
  
  function getAll(){
    return staticData;
  }

  function getById(id) {     
    return staticData.find(appliancesCat => appliancesCat.id==id);  
  }
    return {
    getAll : getAll,       
    getById : getById,
    processCategoryList: processCategoryList
    };
});
define(function () {
   
  var staticData = [];
   
  function processCategoryList(response) {
    var resObj={};
    if (response.categories.length !== 0){
      for(var i=0;i<response.categories.length;i++){
   		resObj={
     	"name":response.categories[i].catName
   		};
   		resObj.id = response.categories[i].catId;
   		staticData.push(resObj);
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
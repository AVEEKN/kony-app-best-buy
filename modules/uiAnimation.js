//Type your code here
/**
*Open Menu animation
**/

function openMenu(param, currentForm){
  var transform = kony.ui.makeAffineTransform();
  
  param.animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transform
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.0
    }, {
        "animationEnd": function(){setMenuOpened(true);}
    });
  
  currentForm.animate(
  kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transform
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.0
    });
  
  
}

/**
*Close Menu animation
**/

function closeMenu(param, currentForm){
  var transform = kony.ui.makeAffineTransform();
  param.animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transform
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.0
    }, {
        "animationEnd": function(){setMenuOpened(false);}
    });
  
  currentForm.animate(
  kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transform
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.0
    });
}

/**
Segment row animation.
This function is getting called on postShow of Home and Product list screes.
**/

function onRowDisplayFunction(){
  var animConfig = {"duration":1,"iterationCount":1,"delay":0,"fillMode":kony.anim.FORWARDS	};
  //translate
  var transformProp1 = kony.ui.makeAffineTransform();
  //transformProp1.translate(150,0);
  //transformProp1.rotate3D(30,50,50,50);
  transformProp1.scale(0,0.1);
 
  var transformProp3 = kony.ui.makeAffineTransform();
  //transformProp3.translate(0,0);
  transformProp3.translate(0,2);
  
  var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                           
                           100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
                          } ;
  var animDefinition = kony.ui.createAnimation(animDefinitionOne);
  var finalAnimation = {definition: animDefinition, config: animConfig};
  
  return finalAnimation;
  
 /* param.setAnimations({visible: finalAnimation});
  
  var curForm = kony.application.getCurrentForm().id;
  if(curForm == "frmHome"){
    frmHome.segCategories.setAnimations({visible: finalAnimation});
  }else if(curForm == "frmProductListScreen"){
    frmProductListScreen.segmentProductList.setAnimations({visible: finalAnimation});
  }*/
  
}
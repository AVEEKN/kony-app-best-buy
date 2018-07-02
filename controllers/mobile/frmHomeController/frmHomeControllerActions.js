define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamBurgerIcon **/
    AS_FlexContainer_j0a2ac1b5f3a4bf899722a6b4f5d6241: function AS_FlexContainer_j0a2ac1b5f3a4bf899722a6b4f5d6241(eventobject) {
        var self = this;
        this.loadHamBurgerMenu();
    },
    /** onClick defined for flxBackBtnIcon **/
    AS_FlexContainer_jbafeb1843454c83af1bf1d8791c3a4c: function AS_FlexContainer_jbafeb1843454c83af1bf1d8791c3a4c(eventobject) {
        var self = this;
        this.onBackButtonClick();
    },
    /** onRowClick defined for segCategoryList **/
    AS_Segment_i31118da8d074f33a62d7794380aff41: function AS_Segment_i31118da8d074f33a62d7794380aff41(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.segmentRowClick();
    },
    /** preShow defined for frmHome **/
    AS_Form_d6763720205041cfb7c6bed1b4cf3f35: function AS_Form_d6763720205041cfb7c6bed1b4cf3f35(eventobject) {
        var self = this;
        this.loadData();
    },
    /** postShow defined for frmHome **/
    AS_Form_i6b01821538148c88b7ac219af7984dd: function AS_Form_i6b01821538148c88b7ac219af7984dd(eventobject) {
        var self = this;
        this.segCategoryAnimation();
    }
});
/*
 * mselmany-theme-light - for UI changes overrides
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, document */

define(function (require, exports, module) {
    "use strict";

    var AppInit = brackets.getModule("utils/AppInit"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
        sideBarActive = false,
        $content = $(".main-view > .content");
//        $sidebar = $(".main-view > #sidebar"),
//        $toolbar = $(".main-view > #main-toolbar"),
//        $resizer = $(".horz-resizer");


    /**** actions ****/
    
    $content.on("click", function (e){
        if(e.which === 2){
            if(sideBarActive){
                hidePanel();
            }else{
                showPanel();
            }
        }
    });
    
                
    /**** functions ****/

    function hidePanel() {
        sideBarActive = false;
        
        $("body").addClass("ccc-sidebar-deactivated");
    }

    function showPanel() {
        sideBarActive = true;
        
        $("body").removeClass("ccc-sidebar-deactivated");
    }


    /**** run ****/

    AppInit.appReady(function () {
        ExtensionUtils.loadStyleSheet(module, "css/main.css");
    });

    AppInit.htmlReady(function () {
//        $resizer.clone(true).prependTo($sidebar);
//        $(".main-view > .horz-resizer").remove();
//        $("#sidebar > .horz-resizer")[1].remove();
//        if ($sidebar.is(":visible") === false) {
//            hidePanel();
//        } else {
            showPanel();
//        }
    });

});
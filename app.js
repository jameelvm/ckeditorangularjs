var angualarModule = angular.module("angualarModule", ["ng.ckeditor"]);

angualarModule.controller("indexController", function ($scope) {
    $scope.ckModel = "Jameel Moideen";
    $scope.toolOptions = {
        disableNativeSpellChecker: false,
        readOnly: false,
        removePlugins: 'elementspath,magicline,contextmenu,liststyle,tabletools,tableselection',
        font_names: 'Arial;Calibri;Courier New;Georgia;Lucida Sans Unicode;Tahoma;Times New Roman;Trebuchet MS;Verdana',
        format_tags: "p;h1;h2;h3;h4",
        font_defaultLabel: "Calibri",
        fontSize_defaultLabel: "14",
        height: "120",
        extraPlugins : 'flite',
        flite:{}

    };
    var flite = $scope.toolOptions.flite =  $scope.toolOptions.flite || {};
    flite.isTracking = false;
    flite.userName = "jameel";
    flite.userId = "1201";
    var userStyleId = Math.floor(Math.random() * 10) + 1;
    var tempstyle = ("{" + '"' + "Jameel" + '"' + ":" + userStyleId + "}");
    flite.userStyles = JSON.parse(tempstyle);
    flite.tooltips = {
        show: true,
        path: "js/opentip-adapter.js",
        classPath: "OpentipAdapter",
        cssPath: "css/opentip.css",
        delay: 500
    };
    flite.tooltipTemplate = "%a by %u ,";

})
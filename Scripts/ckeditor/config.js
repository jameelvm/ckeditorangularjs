/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    config.toolbar = [
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', 'RemoveFormat'] },
      { name: 'table', items: ['Table'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText',  '-', 'Undo', 'Redo'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'CreateDiv'] },
      { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'flite', items: ["flite-toggletracking", "flite-toggleshow", "flite-acceptall", "flite-rejectall", "flite-acceptone", "flite-rejectone"] },
      { name: 'deletebutton', items: ['deletebutton'] } 
    ];
    config.baseFloatZIndex = 9999999;

      
    config.keystrokes = [
              [CKEDITOR.CTRL + 74 /*J*/, 'justifyblock'],
              [CKEDITOR.CTRL + 69 /*E*/, 'justifycenter'],
              [CKEDITOR.CTRL + 76 /*L*/, 'justifyleft'],
              [CKEDITOR.CTRL + 82 /*R*/, 'justifyright'],
    ];
};
CKEDITOR.addCss('ul li{ list-style-position: inside; }');
CKEDITOR.addCss('ol li{ list-style-position: inside; }');


CKEDITOR.on('instanceReady', function (evt) {
    evt.editor.config.flite.isTracking = false;
    evt.editor.removeMenuItem('table');
    const liteRef = evt.editor.config.flite;
    if (evt.editor.plugins.flite != null || evt.editor.plugins.flite != undefined) {
        evt.editor.plugins.flite.findPlugin(CKEDITOR.instances[evt.editor.name]).toggleShow(false, true);   
        evt.editor.plugins.flite.findPlugin(CKEDITOR.instances[evt.editor.name]).toggleTracking(false, true); 

    }
});
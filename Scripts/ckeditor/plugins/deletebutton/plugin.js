CKEDITOR.plugins.add('deletebutton',
{
    init: function (editor) {

       
        editor.ui.addButton("deletebutton",
        {
            label: 'Delete textbox',
            command: 'delete',
            icon: this.path + "Deletebutton.png"
        });
        var cmd = editor.addCommand('delete', { exec: showDeleteMessage });
    }
});
function showDeleteMessage(e) {
    var parentElement = CKEDITOR.currentInstance.config.editorId;
    var data = angular.element("#" + parentElement).scope().vm.showDeleteMessage();
}
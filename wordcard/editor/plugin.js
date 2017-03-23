EkstepEditor.basePlugin.extend({
    type: "org.ekstep.wordcard",
    initialize: function() {
        EkstepEditorAPI.addEventListener("org.ekstep.wordcard:showpopup", this.loadHtml, this);
        setTimeout(function() {
            var templatePath = EkstepEditorAPI.getPluginRepo() + '/org.ekstep.wordcard-1.0/editor/wordcardconfig.html';
            var controllerPath = EkstepEditorAPI.getPluginRepo() + '/org.ekstep.wordcard-1.0/editor/wordcardapp.js';
            EkstepEditorAPI.getService('popup').loadNgModules(templatePath, controllerPath);
        }, 1000);
    },
    newInstance: function() {
        var props = this.convertToFabric(this.attributes);
        this.editorObj = new fabric.Circle(props);
        if (this.editorObj) this.editorObj.setStroke(props.stroke);
    },
    onConfigChange: function(key, value) {
        var instance = EkstepEditorAPI.getCurrentObject();
        var editorObj = instance.editorObj
        switch (key) {
            case "color":
                editorObj.setStroke(value);
                instance.attributes.stroke = value;
                break;
        }
        EkstepEditorAPI.render();
        EkstepEditorAPI.dispatchEvent('object:modified', { target: EkstepEditorAPI.getEditorObject() });
    },
    loadHtml: function(parentInstance, attrs) {
        var instance = this;
        EkstepEditorAPI.getService('popup').open({
            template: 'wordcard',
            controller: 'wordCardController',
            controllerAs: '$ctrl',
            resolve: {
                'instance': function() {
                    return instance;
                },
                'attrs': function() {
                    return attrs;
                }
            },
            width: 900,
            showClose: false,
        });


    },
});

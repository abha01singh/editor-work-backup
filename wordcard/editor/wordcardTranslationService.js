/**
 *
 * Language service helps to get languages and wordnet data.
 * @class EkstepEditor.languageService
 * @author Santhosh Vasabhaktula <santhosh@ilimi.in>
 *
 */
//var eEditor = EkstepEditor;
var wordCardService = new(EkstepEditor.iService.extend({
    /**
     * @member {string} languageURL
     * @memberof EkstepEditor.languageService
     */
    translationURL: 'https://qa.ekstep.in' + '/api/language/v2/language/translations/',

    learningURL: EkstepEditor.config.baseURL + '/api/learning/',

    /**
     * @member {object} requestHeaders
     * @memberof EkstepEditor.languageService
     */
    requestHeaders: {
        "headers": {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
   /**
   * get translationed word
   * @param {Object} req contain requested data
   * @param  {Function} callback returns error and response as arguments
   * @returns {Function} callback
   */
   getTranslation: function(req, callback) {
        this.getFromService(this.translationURL + req.wordLang + '/' + req.word + '?languages=' + req.languages, this.requestHeaders, callback);
    },

    /**
     * Get types of word. eg. Nouns, verbs etc
     * @param  {Function} callback returns error and response as arguments
     * @memberof EkstepEditor.languageService
     * @returns {Function} callback
     */
    getLanguages: function(callback) {
        this.getFromService(this.learningURL + 'v1/language', this.requestHeaders, callback);
    },

    /**
     * Utility function which is used to call http get request
     * @param  {string}   url      API url
     * @param  {object}   headers  API headers
     * @param  {Function} callback returns error and response as arguments
     * @memberof EkstepEditor.languageService
     * @returns {function} callback
     */
    getFromService: function(url, headers, callback) {
        var instance = this;
        instance.http.get(url, headers, function(err, res) {
            callback(err, res);
        });
    }
}));
wordCardService.getLanguages();
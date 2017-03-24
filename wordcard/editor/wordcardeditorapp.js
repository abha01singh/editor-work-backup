'use strict';

angular.module('wordCardapp', []).controller('wordcardEditorController', ['$scope', function($scope) {
    var ctrl = this;
    ctrl.configData = {};
    ctrl.languages = [];
    ctrl.selectedLanguages = [];
    ctrl.configData.meaning = false;
    ctrl.configData.audio = false;
    ctrl.configData.picture = false;
    ctrl.configData.exampleUsage = false;
    ctrl.configData.translationLanguages = [];

    function languageCb(err, res) {
        if (!err && res.statusText == "OK") {
            ctrl.languages = res.data.result.languages;
            EkstepEditorAPI.jQuery('.ui.dropdown').dropdown({ useLabels: false });
            $scope.$safeApply();
        }
    }

    /**
     * Calling Api to get languages
     */
    wordCardService.getLanguages(languageCb);

    ctrl.nextSetConfig = function() {
        ctrl.configData.translationLanguages = ctrl.selectedLanguages;
        console.log(ctrl.configData)
        _.each(ctrl.wordData, function(word) {
            var requestObj = {};
            requestObj.wordLang = word.graph_id;
            requestObj.word = word.lemma;
            requestObj.languages = ctrl.selectedLanguages.toString();
            //console.log(requestObj);
            wordCardService.getTranslation(requestObj, function(err, res) {
                if (!err && res.statusText == "OK") {
                    setTranslateWord(err, res, word);
                }
            });
        });
    }

    function setTranslateWord(err, res, word) {
        console.log(res)
        if (!err && res.statusText == "OK") {
            word.translation = res.data.result.translations;
            console.log(word)
            $scope.$safeApply();
        }
    }
    ctrl.wordData = [{
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        }, {
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        },{
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        },{
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        },{
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        },{
            "identifier": "878",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 8,
            "primaryMeaningId": "109778400",
            "lemma": "कल",
            "graph_id": "hi",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 0.9,
            "synsetCount": 1,
            "thresholdLevel": "2",
            "isPhrase": false,
            "lastUpdatedOn": "2017-03-02T12:24:42.462+0000",
            "status": "Live",
            "node_id": 384,
            "category": "Grammatical Word",
            "synonyms": [
                "109778400"
            ],
            "syllables": [
                "ê",
                "k a",
                "ḍ e",
                "m i",
                "k"
            ],
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "hasSynonyms": true,
            "wordsets": [
                "en_10206569",
                "en_20205746",
                "en_20205747"
            ],
            "es_metadata_id": "878"
        },{
            "identifier": "893",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 16,
            "primaryMeaningId": "109778400",
            "lemma": "academician",
            "graph_id": "en",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "meaning": "an educator who works at a college or university",
            "ekstepWordnet": false,
            "word_complexity": 1.8,
            "synsetCount": 3,
            "isPhrase": true,
            "lastUpdatedOn": "2017-03-02T12:19:47.173+0000",
            "status": "Live",
            "node_id": 394,
            "hasSynonyms": true,
            "category": "Grammatical Word",
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_10097533/artifact/1080x1920-mario-hd-mobile-wallpaper-2_80_1482765423_1482765432838.jpg"
            ],
            "synonyms": [
                "109778400",
                "109778832",
                "109778642"
            ],
            "wordsets": [
                "en_20205746",
                "en_20205714"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1121933707421859841152/artifact/1478076765audio_1478076597229_388_1488448575_1488448577248.mp3"
            ],
            "es_metadata_id": "893"
        }, {
            "identifier": "2877",
            "morphology": false,
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "syllableCount": 12,
            "primaryMeaningId": "302801046",
            "lemma": "agricultural",
            "graph_id": "en",
            "nodeType": "DATA_NODE",
            "objectType": "Word",
            "pos": [
                "adjective"
            ],
            "meaning": "relating to or used in or promoting agriculture or farming",
            "ekstepWordnet": false,
            "word_complexity": 0.7,
            "synsetCount": 1,
            "thresholdLevel": "3",
            "isPhrase": false,
            "lastUpdatedOn": "2017-02-27T09:06:06.593+0000",
            "status": "Live",
            "node_id": 1408,
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_112188324897857536153/artifact/c6b29a5bb76373caadf699084ab0e2dc_1487832629302.jpeg"
            ],
            "synonyms": [
                "302801046"
            ],
            "syllables": [
                "ê",
                "g r i",
                "k a",
                "l ch er a",
                "l"
            ],
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/1477391095audio_1477391093270.mp3"
            ],
            "es_metadata_id": "2877"
        }, {
            "sources": [
                "IndoWordnet"
            ],
            "sourceTypes": [
                "wordnets"
            ],
            "lemma": "apple",
            "pictures": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/language_assets/pictures/apple.png"
            ],
            "objectType": "Word",
            "pos": [
                "noun"
            ],
            "wordLists": [
                "umeshtest",
                "testsqs",
                "Words-Divya",
                "test_word_list_12",
                "ESL",
                "Words-Razesh"
            ],
            "meaning": "A round red fruit found in Kashmir and Himachal pradesh",
            "word_complexity": 1.3,
            "ekstepWordnet": false,
            "lastUpdatedOn": "2016-11-04T09:40:09.230+0000",
            "identifier": "7007",
            "morphology": false,
            "syllableCount": 5,
            "primaryMeaningId": "en_30205557",
            "exampleSentences": [
                "Radha ate a big red apple today."
            ],
            "graph_id": "en",
            "nodeType": "DATA_NODE",
            "wordListIds": [
                "en_20205792",
                "en_20205721",
                "en_205361",
                "en_20205664",
                "en_30205591",
                "en_205376"
            ],
            "synsetCount": 1,
            "isPhrase": false,
            "category": "Thing",
            "pronunciations": [
                "https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/language_assets/audio/apple.mp3"
            ],
            "status": "Live",
            "node_id": 3804,
            "es_metadata_id": "7007"
        }]
        /*########## Method to add content to stage ######*/
    ctrl.addtoLesson = function() {
        var eventData = {};
        eventData["config"] = { __cdata: JSON.stringify({ "meaning": true, "picture": true, "audio": false }) };
        eventData["data"] = { __cdata: JSON.stringify(ctrl.wordData[0]) };
        EkstepEditorAPI.dispatchEvent("org.ekstep.wordcard:create", eventData);
        ctrl.cancel();
    }

    /*########## Method to dismiss the modal ######*/
    ctrl.cancel = function() {
        $scope.closeThisDialog();
    }
}]);

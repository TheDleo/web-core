DF = {};
DF.Application = function (config) {
    this.config = config;
    this.actions = Actions;
    this.actions.doLayout();
    this.currentState = "";
    this.currentData = "";
    this.templates = new Templates();
    this.utils = {
        getQueryParameter:function (key) {
            key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
            var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
            return match && decodeURIComponent(match[1].replace(/\+/g, " "));
        },

        jsonRecords:function (obj) {
            var json = null;
            if (obj instanceof String) {
                return obj;
            } else if (obj instanceof Array) {
                var rec = [];
                for (var i in obj) {
                    rec[rec.length] = {fields:obj[i].getJSON ? obj[i].getJSON() : obj[i]};
                }
                return JSON.stringify({records:{record:rec}});
            } else {
                json = {records:{record:[
                    {fields:obj}
                ]}};
            }
            return JSON.stringify(json);
        },
        jsonDeletes:function (array) {
            var json = null;
            if (array instanceof Array) {
                throw "NOT IMPLEMENTED!"; // future use is make string array from objects
            } else if (array instanceof String) {
                json = {Ids:array};
            } else {
                json = {Ids:array.toString()};
            }
            return JSON.stringify(json);
        },
        /**
         *
         * @param json
         * @returns {Array}
         */
        flattenResponse:function (json) {
            var objects = [];
            for (var i in json.record) {
                objects[objects.length] = json.record[i].fields;
            }
            return objects;
        },
        currentServer:function () {
            var loc = window.location;
            var tmp = loc.protocol + '//' + loc.hostname;
            if (loc.port) tmp += ':' + loc.port;
            return tmp;
        }
    };
};




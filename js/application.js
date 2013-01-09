DF = {};
DF.Application = function (config) {
    this.config = config;
    this.actions = Actions;
    this.actions.doLayout();
    this.currentState = "";
    this.currentData = "";
    this.templates = new Templates();
    this.utils = {

    };
};




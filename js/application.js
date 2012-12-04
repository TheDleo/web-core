/**
 * Created with JetBrains PhpStorm.
 * User: jasonsykes
 * Date: 11/28/12
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */
DF = {};
DF.Application = function (config) {
    this.config = config;
    this.actions = Actions;
    this.actions.doLayout();
    this.currentState = "";
    this.currentData = "";
};




/**
 * Created with JetBrains PhpStorm.
 * User: jasonsykes
 * Date: 1/7/13
 * Time: 11:37 AM
 * To change this template use File | Settings | File Templates.
 */
Templates = function () {
    this.thumbPanel = "<h1>{{name}}</h1><br/>{{desc}}";
    this.alertMessage = '<div class="alert">' +
        '<a class="close" data-dismiss="alert">x</a>' +
        '{{message}}' +
        '</div>';
    this.gridTemplate = '<table id="db-tables" class="table table-bordered table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th class="table-names-header">Table Name</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '{{#table}}' +
        '<tr>' +
        '<td onclick = "Actions.loadSchema(\'{{name}}\')")>{{name}}</td>' +
        '</tr> ' +
        '{{/table}}' +
        '</tbody>' +
        '</table>';
    this.appTemplate = '<table id="db-tables" class="table table-bordered table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th class="table-names-header">Applications</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '{{#record}}' +
        '<tr>' +
        '<td>{{fields.label}}</td>' +
        '</tr> ' +
        '{{/record}}' +
        '</tbody>' +
        '</table>';
    this.dropDownTemplate = '<div class="btn-group">' +
        '<a class="btn btn-warning dropdown-toggle" data-toggle="dropdown" href="#">' +
        'Applications' +
        '<span class="caret"></span>' +
        '</a>' +
        '<ul class="dropdown-menu">' +
        '{{#record}}' +
        '<li><a data-target="#" href="#" onclick = "Actions.showApp(\'{{fields.name}}\',\'{{fields.url}}\')">{{fields.label}}</a></li>' +
        '{{/record}}' +
        '</ul>' +
        '</div>';
    this.navBarDropDownTemplate = '<ul class="nav">' +
        '<li class="dropdown">' +
        '<a data-target="#" href="#" class="dropdown-toggle" data-toggle="dropdown">' +
        'Applications' +
        ' <b class="caret"></b>' +
        '</a>' +
        '<ul class="dropdown-menu">' +

        '{{#Applications.app_groups}}' +
        '<li>&nbsp;&nbsp;&nbsp;{{name}}</li>' +
        '{{#apps}}' +
        '<li><a data-target="#" href="#" onclick = "Actions.showApp(\'{{name}}\',\'{{url}}\',\'{{is_url_external}}\')">{{label}}</a></li>' +
        '{{/apps}}' +
        '{{/Applications.app_groups}}' +
        '<li>&nbsp;&nbsp;&nbsp;Other Apps</li>' +
        '{{#Applications.no_group_apps}}' +
        '<li><a data-target="#" href="#" onclick = "Actions.showApp(\'{{name}}\',\'{{url}}\',\'{{is_url_external}}\')">{{label}}</a></li>' +
        '{{/Applications.no_group_apps}}' +
        '</ul>' +
        '</li>' +
        '</ul>';
    this.userInfoTemplate = '<div class="btn-group"><a id="dfProfileLnk" class="btn btn-primary" title="Change Your Profile">' +
        '<i class="icon-user"></i>&nbsp;{{full_name}}</a><a id="dfPasswordLnk" class="btn btn-info" title="Change Your Password"><i class="icon-key"></i></a>' +
        '<a id="dfSignOutLink" class="btn btn-info" title="End Your Session Now"><i class="icon-signout"></i></a></div>';
    this.appIconTemplate = '{{#Applications.app_groups}}&nbsp;&nbsp;&nbsp;<h3>{{name}}</h3>' +
        '<table id="db-tables" class="table table-bordered table-striped">' +
        '{{#apps}}' +
        '<tr><td><div class="media" style="margin:0px;" onclick = "Actions.showApp(\'{{name}}\',\'{{url}}\',\'{{is_url_external}}\')">' +
        '<span class=" well warning pull-left" data-target="#" href="#">' +
        '<i class="icon-cogs icon-2x"></i>' +
        '</span>' +
        '<div class="media-body">' +
        '<h4 class="media-heading">{{label}}</h4>' +
        '{{description}}' +
        '</div>' +
        '</div></td></tr>' +
        '{{/apps}}</table>' +
        '{{/Applications.app_groups}}' +
        '<h3>Other Apps</h3>'+
        '<table id="db-tables" class="table table-bordered table-striped">' +
        '{{#Applications.no_group_apps}}' +
        '<tr><td><div class="media" style="margin:0px;" onclick = "Actions.showApp(\'{{name}}\',\'{{url}}\',\'{{is_url_external}}\')">' +
        '<span class=" well warning pull-left" data-target="#" href="#">' +
        '<i class="icon-cogs icon-2x"></i>' +
        '</span>' +
        '<div class="media-body">' +
        '<h4 class="media-heading">{{label}}</h4>' +
        '{{description}}' +
        '</div>' +
        '</div></td></tr>' +
        '{{/Applications.no_group_apps}}</table>';
    this.loadTemplate = function (template, data, renderTo) {
        var processTpl;
        processTpl = Mustache.to_html(template, data);
        $('#' + renderTo).html(processTpl);

    }
};







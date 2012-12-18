Templates = function () {
    this.thumbPanel = "<h1>{{name}}</h1><br/>{{desc}}";
    this.alertMessage = '<div class="alert">' +
        '<a class="close" data-dismiss="alert">x</a>' +
        '{{message}}' +
        '</div>';
    this.gridTemplate = '<table class="table table-bordered table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th>Table Name</th>' +
        '</thead>' +
        '<tbody>' +
        '{{#table}}' +
        '<tr>' +
        '<td onclick = "Actions.loadSchema(\'{{name}}\')")>{{name}}</td>' +
        '</tr> ' +
        '{{/table}}' +
        '</tbody>' +
        '</table>';
    this.loadTemplate = function (template, data, renderTo) {
        //console.log(data);
        var processTpl;
        processTpl = Mustache.to_html(template, data);
        document.getElementById(renderTo).innerHTML = processTpl;

    }
};




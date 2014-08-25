module.exports.register = function (Handlebars, options) {


    Handlebars.registerHelper("label", function (type, text) {

        var content = '<span class="label label-' + type + '">' + text + '</span>';
        return new Handlebars.SafeString(content);

    });

    Handlebars.registerHelper("alert", function (type, text) {

        var content = '<div class="alert alert-' + type + '">' + text + '</div>';
        return new Handlebars.SafeString(content);

    });


}

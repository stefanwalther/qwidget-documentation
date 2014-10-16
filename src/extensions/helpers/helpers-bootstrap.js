/**
 * Definition of shortcuts:
 *
 *  - Bootstrap label: label(type, text)
 *  - Bootstrap alert: alert(type, text)
 *
 *  - done
 *  - tested
 *  - todo
 *
 * @param Handlebars
 * @param options
 */
module.exports.register = function (Handlebars, options) {

    // ----------------------------------------------------------------
    // GENERIC SHORTCUTS
    // ----------------------------------------------------------------

    /**
     * Bootstrap label
     */
    Handlebars.registerHelper('label', function (type, text) {

        var content = '<span class="label label-' + type + '">' + text + '</span>';
        return new Handlebars.SafeString(content);

    });

    /**
     * Bootstrap alert
     */
    Handlebars.registerHelper("alert", function (type, text) {

        var content = '<div class="alert alert-' + type + '">' + text + '</div>';
        return new Handlebars.SafeString(content);

    });

    // ----------------------------------------------------------------
    // SPECIFIC SHORTCUTS
    // ----------------------------------------------------------------

    /**
     * Label with type "success" and text "Done"
     */
    Handlebars.registerHelper('done', function (  ) {
        var content = '<div class="label label-success">Done</div>';
        return new Handlebars.SafeString(content);
    });

    /**
     * Label with type "success" and text "Tested"
     */
    Handlebars.registerHelper('tested', function (  ) {
        var content = '<div class="label label-success">Tested</div>';
        return new Handlebars.SafeString(content);
    });

    /**
     * Label with type "warning" and text "Todo"
     */
    Handlebars.registerHelper('tested', function (  ) {
        var content = '<div class="label label-warning">Todo</div>';
        return new Handlebars.SafeString(content);
    });




};

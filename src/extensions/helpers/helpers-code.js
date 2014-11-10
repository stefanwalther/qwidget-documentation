module.exports.register = function (Handlebars, options) {


    Handlebars.registerHelper("safe", function (code) {

        return new Handlebars.SafeString(code);

    });

};
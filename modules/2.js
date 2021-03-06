// a module that "exports" to a provided object (mixin)

var myobj = {};

(function (exports) {
    lang = "en";
    var names = {
        "en": ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"],
        "es": ["Domingo", "Lunes", "Martes", "Miércoles",
                "Jueves", "Viernes", "Sábado"],
    };

    exports.setLang = function (newlang) {
        lang = newlang;
    };
    exports.getDay = function (number) {
        return names[lang][number];
    };
    exports.getNumber = function (name) {
        return names[lang].indexOf(name);
    };
})(myobj.weekDay = {});

console.log(myobj.weekDay.getDay(myobj.weekDay.getNumber("Saturday")));
// → Saturday

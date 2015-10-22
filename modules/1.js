// simple object literal, then module-ized

var dayNames = {
    lang: "en",
    names: {
        "en": ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"],
        "es": ["Domingo", "Lunes", "Martes", "Miércoles",
                "Jueves", "Viernes", "Sábado"],
    },
    setLang: function (lang) {
        this.lang = lang;
    },
    getDay: function (number) {
        return this.names[this.lang][number];
    }
}

console.log(dayNames.getDay(3));
dayNames.setLang("es");
console.log(dayNames.getDay(3));

// using an IIFE to encapsulate data
var dayNames = function () {
    var lang = "en";
    var names = {
        "en": ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"],
        "es": ["Domingo", "Lunes", "Martes", "Miércoles",
                "Jueves", "Viernes", "Sábado"],
    };

    function setLang(newlang) {
        lang = newlang;
    }

    function getDay(number) {
        return names[lang][number];
    }
    return {
        setLang: setLang,
        getDay: getDay
    }
}();

console.log(dayNames.getDay(3));
// → Wednesday

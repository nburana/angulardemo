//Use as app level function
//params must be in {{}}
//format expressions
mainApp.filter("reverse", function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
});

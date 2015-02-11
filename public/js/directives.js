//At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) 
//that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform 
//the DOM element and its children.

//component
mainApp.directive("adddiv", function() {
    return {
        restrict: "E",
        scope: {}, //isolate scope!!
        replace: true, //replaces the wrapper
        link: function(scope, element) {
            element.bind("mouseenter", function() {
                console.log("Boom!");
            });
        },
        template: "<div>Added div via directive</div>"
    };
});

mainApp.directive("rollover", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            console.log("Enter with attr: " + attrs.rollover);
        });
        element.bind("mouseleave", function() {
            console.log("Left with attr: " + attrs.rollover);
        });
    }
});

mainApp.directive("mytransclude", function() {
    return {
        restrict: "E",
        transclude: true,
        //template: "<div>Transclude Div <div ng-transclude/></div>"
        templateUrl: "js/templates/transcludeblock.html"
    };

});

'use strict';
var dotstail = {
    setDot: function setDot(options) {
        var myArray = [];
        var sort = ['element', 'letter', 'lines', 'resize'];
        sort.forEach(function (el) {
            myArray.push(options[el]);
        });
        var myObject = checkError.apply(myObject, myArray);
        // check error value include
        function checkError(pr_element, pr_letter, pr_lines) {
            var getElement = document.querySelectorAll(pr_element);
            getElement = [].slice.call(getElement);

            if (pr_element === undefined) {
                return console.log("%c'Thank you for using dotstail. Please, insert property for element selector element: 'element here'", 'background: #f16d99; color: #fff');
            }
            if (pr_element.slice(0, 1) != '.' && pr_element.slice(0, 1) != '#') {
                return console.log("%c'Thank you for using dotstail. Please, insert property for element selector element: '.' or '#'", 'background: #f16d99; color: #fff');
            }

            if (pr_letter != undefined && typeof pr_letter === 'string') {
                return console.log("%c'Thank you for using dotstail. Please, letter property must be a number", 'background: #f16d99; color: #fff');
            }
            if (pr_letter === undefined) {
                getElement.forEach(function (el) {
                    pr_letter = 0;
                });
            }
            var myArray = [pr_element, pr_letter, pr_lines];
            var myObject = addDot.apply(myObject, myArray);
        }
        function addDot(pr_element, pr_letter, pr_lines) {
            var getElement = document.querySelectorAll(pr_element);
            getElement = [].slice.call(getElement);
            var maxHeight, text_data, text_use;
            getElement.forEach(function (el) {
                text_data = el.textContent;
                var text_cache = text_data;

                var text_local = function text_local() {
                    maxHeight = parseFloat(window.getComputedStyle(el).getPropertyValue('line-height')) * pr_lines;
                    text_use = text_cache.trim();
                    for (var i = 0; i < text_use.length + 1; i++) {
                        el.textContent = text_use.slice(0, [i]);
                        var height = parseFloat(el.offsetHeight);
                        if (height > maxHeight) {
                            return el.textContent = text_use.slice(0, [i] - 4 - pr_letter) + "...";
                        }
                    }
                };
                text_local();
                window.addEventListener('resize', text_local);
            });
        }
    }
};
window.addEventListener('load', function () {
    dotstail;
});